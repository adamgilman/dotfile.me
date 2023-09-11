yarn run quicktype \
  --src libs/dto/schemas/auth/verifyLoggedIn.json \
  --src-lang schema \
  --out libs/dto/src/lib/auth/verify-logged-in.ts \
  --top-level VerifyLoggedIn \

yarn run quicktype \
  --src libs/dto/schemas/auth/verifyLoggedIn.json \
  --src-lang schema \
  --out libs/dto/golang/auth/verify.go \
  --package auth \
  --top-level VerifyLoggedIn \