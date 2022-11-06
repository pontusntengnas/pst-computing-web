package tools

import (
	"fmt"
	"os"
)

func GetOrPanic(key string) string {
	value, exists := os.LookupEnv(key)
	if exists {
		return value
	}

	panic(fmt.Sprintf("Missing env var: %s", key))
}
