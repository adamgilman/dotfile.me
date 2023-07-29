package configmanager

import "os"

const CONFIG_PATH = "~/.dfm"

type DFMConfigManager struct {
	Path string
}

func (c *DFMConfigManager) Load() error {
	// implementation of loading config file
	c.Path = CONFIG_PATH
	if os.Getenv("DFM_CONFIG_PATH") != "" {
		c.Path = os.Getenv("DFM_CONFIG_PATH")
	}
	c.CreateConfigPathIfNotExists()
	return nil
}

func (c *DFMConfigManager) CreateConfigPathIfNotExists() {
	_, err := os.Stat(c.Path)
	if os.IsNotExist(err) {
		os.Mkdir(c.Path, 0755)
	}
}
