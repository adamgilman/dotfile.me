package delme

import (
	"testing"
)

func TestDelme(t *testing.T) {
	result := Delme("works")
	if result != "Delme works" {
		t.Error("Expected Delme to append 'works'")
	}
}
