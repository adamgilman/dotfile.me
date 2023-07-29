package configmanager

import (
	"os"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestDefaultPathCanBeOverriden(t *testing.T) {
	// The default path for the config file is ~/.dfm but, it can be overwrriten by an environment variable called DFM_CONFIG_PATH

	config := DFMConfigManager{}
	config.Load()
	assert.Equal(t, config.Path, "~/.dfm")

	t.Setenv("DFM_CONFIG_PATH", "/tmp/dfm")
	config.Load()
	assert.Equal(t, config.Path, "/tmp/dfm")
}

func TestCreateSaneDefaultsIfDirectoryDoesNotExist(t *testing.T) {
	// If the directory does not exist, create it and create sane defaults
	config := DFMConfigManager{}
	t.Setenv("DFM_CONFIG_PATH", "/tmp/dfm")
	config.Load()
	_, err := os.Stat(config.Path)
	assert.Nil(t, err)
	os.RemoveAll(config.Path)
	// reset the test environment
	_, err = os.Stat(config.Path)
	assert.NotNil(t, err)
}
