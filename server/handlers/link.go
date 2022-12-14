package handlers

import (
	"encoding/json"
	"net/http"
	"os"
	"strconv"
	linkdto "wayslink/dto/link"
	dto "wayslink/dto/result"
	"wayslink/models"
	"wayslink/repositories"

	"github.com/golang-jwt/jwt/v4"
	"github.com/gorilla/mux"
)

type handlerLink struct {
	LinkRepository repositories.LinkRepository
}

func HandlerLink(LinkRepository repositories.LinkRepository) *handlerLink {
	return &handlerLink{LinkRepository}
}

func (h *handlerLink) CreateLink(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	// get data user token
	userInfo := r.Context().Value("userInfo").(jwt.MapClaims)
	userId := int(userInfo["id"].(float64))

	dataContext := r.Context().Value("dataFile")
	filename := dataContext.(string)

	request := linkdto.LinkRequest{
		Title:       r.FormValue("titlelink"),
		Description: r.FormValue("descriptionlink"),
		Image:       r.FormValue("file"),
		Template:    r.FormValue("template"),
	}

	link := models.Link{
		Title:       request.Title,
		Description: request.Description,
		UserID:      userId,
		Template:    request.Template,
		Image:       filename,
	}

	data, err := h.LinkRepository.CreateLink(link)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
	}

	// file_path := os.Getenv("FILE_PATH")

	linkResponse := linkdto.LinkResponse{
		ID: data.ID,
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: linkResponse}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerLink) FindLinks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	userInfo := r.Context().Value("userInfo").(jwt.MapClaims)
	userId := int(userInfo["id"].(float64))

	links, err := h.LinkRepository.FindLink(userId)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(err.Error())
	}

	linksResponse := make([]linkdto.LinkResponse, 0)

	filePath := os.Getenv("FILE_PATH")

	for _, link := range links {
		linksResponse = append(linksResponse, linkdto.LinkResponse{
			ID:          link.ID,
			Title:       link.Title,
			Description: link.Description,
			Image:       filePath + link.Image,
		})

	}
	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: linksResponse}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerLink) PreviewLink(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	link_id, _ := strconv.Atoi(mux.Vars(r)["link_id"])

	link, err := h.LinkRepository.PreviewLink(link_id)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	previewResponse := linkdto.LinkResponse{
		ID:          link.ID,
		Title:       link.Title,
		Description: link.Description,
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: previewResponse}
	json.NewEncoder(w).Encode(response)
}
