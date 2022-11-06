package tools

import (
	"fmt"
	"net/http"

	"github.com/pontusntengnas/pst-computing-web/api-common/gcp/storage"
)

func GetJson(w http.ResponseWriter, r *http.Request, fileName string) {
	if !isAuthorized(w, r) || !isRequestValid(w, r) {
		return
	}

	file, err := storage.Download(
		GetOrPanic("GCP_SA_CREDENTIALS"),
		GetOrPanic("GCP_BUCKET_NAME"),
		fileName)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Printf("Error: %v", err)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	_, err = w.Write(file)
	if err != nil {
		fmt.Printf("Error: %v", err)
	}
}

func isAuthorized(w http.ResponseWriter, r *http.Request) bool {
	token := r.Header.Get("Authorization")

	if token != GetOrPanic("PROFILE_API_AUTH_TOKEN") {
		w.WriteHeader(http.StatusUnauthorized)
		return false
	}

	return true
}

func isRequestValid(w http.ResponseWriter, r *http.Request) bool {
	if r.Method != "GET" {
		w.WriteHeader(http.StatusBadRequest)
		return false
	}

	return true
}
