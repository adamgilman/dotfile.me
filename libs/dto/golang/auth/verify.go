// This file was generated from JSON Schema using quicktype, do not modify it directly.
// To parse and unparse this JSON data, add this code to your project and do:
//
//    verifyLoggedIn, err := UnmarshalVerifyLoggedIn(bytes)
//    bytes, err = verifyLoggedIn.Marshal()

package auth

import "encoding/json"

func UnmarshalVerifyLoggedIn(data []byte) (VerifyLoggedIn, error) {
	var r VerifyLoggedIn
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *VerifyLoggedIn) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type VerifyLoggedIn struct {
	Domain string `json:"domain"`
	Email  string `json:"email"`
	IsAuth bool   `json:"isAuth"`
}
