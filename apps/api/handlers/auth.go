package handlers

import (
	"context"
	"log"
	"strings"

	"dotfileme/libs/dto/golang/auth"

	firebase "firebase.google.com/go/v4"
	"github.com/gin-gonic/gin"
)

func VerifyLoggedIn(fba *firebase.App) gin.HandlerFunc {
	return func(c *gin.Context) {
		log.Println("VerifyLoggedIn")

		client, err := fba.Auth(context.Background())
		if err != nil {
			log.Println("error getting Auth client:", err)
			c.JSON(200, auth.VerifyLoggedIn{
				IsAuth: false,
			})
			return
		}

		rawToken := c.Request.Header.Get("Authorization")
		rawToken = strings.Split(rawToken, "Bearer ")[1]
		token, err := client.VerifyIDToken(context.Background(), rawToken)
		if err != nil {
			log.Println("error verifying ID token:", err)
			c.JSON(200, auth.VerifyLoggedIn{
				IsAuth: false,
			})
			return
		}

		resp := auth.VerifyLoggedIn{
			Domain: token.Audience,
			Email:  token.Firebase.Identities["email"].([]interface{})[0].(string),
			IsAuth: true,
		}
		c.JSON(200, resp)
	}
}
