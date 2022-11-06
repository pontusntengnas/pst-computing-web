package handler

import (
	"net/http"

	"github.com/pontusntengnas/pst-computing-web/api-common/tools"
)

func GetProfile(w http.ResponseWriter, r *http.Request) {
	tools.GetJson(w, r, "profile.json")
}
