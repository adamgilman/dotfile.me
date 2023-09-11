package main

import (
	"context"
	"dotfileme/apps/api/handlers"
	"log"

	firebase "firebase.google.com/go/v4"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"google.golang.org/api/option"
)

var firebaseApp *firebase.App

func init() {
	var err error
	opt := option.WithCredentialsFile("../../firebaseKeys.json")
	firebaseApp, err = firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
		log.Fatalf("error initializing app: %v\n", err)
	}
}

func main() {
	r := gin.Default()
	r.RedirectTrailingSlash = false
	config := cors.DefaultConfig()
	// config.AllowAllOrigins = true
	config.AllowOrigins = []string{"*"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Content-Length", "User-Agent", "Referrer", "Host", "Token", "Authorization"} // Add "Authorization" here
	r.Use(cors.New(config))

	v1 := r.Group("/v1")
	{
		v1.POST("/auth/verify", handlers.VerifyLoggedIn(firebaseApp))
	}
	r.Run()
}
