module github.com/supsi-dacd-isaac/cosmos-apps/ecm

go 1.13

require (
	github.com/cosmos/cosmos-sdk v0.39.0
	github.com/cosmos/cosmos-apps/ecm v0.0.0
	github.com/gorilla/mux v1.7.4
	github.com/spf13/cobra v1.0.0
	github.com/spf13/viper v1.7.1
	github.com/stretchr/testify v1.6.1
	github.com/tendermint/go-amino v0.15.1
	github.com/tendermint/tendermint v0.33.7
	github.com/tendermint/tm-db v0.5.1
)

replace (
	github.com/cosmos/cosmos-apps/ecm v0.0.0 => ../ecm
)