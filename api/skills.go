package handler

import (
	"net/http"

	"github.com/pontusntengnas/pst-computing-web/api-common/tools"
)

func GetSkills(w http.ResponseWriter, r *http.Request) {
	tools.GetJson(w, r, "skills.json")
}
