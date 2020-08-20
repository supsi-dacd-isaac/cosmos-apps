PACKAGES=$(shell go list ./... | grep -v '/simulation')

VERSION := $(shell echo $(shell git describe --tags) | sed 's/^v//')
COMMIT := $(shell git log -1 --format='%H')

ldflags = -X github.com/supsi-dacd-isaac/cosmos-apps/version.Name=ECM \
	-X github.com/supsi-dacd-isaac/cosmos-apps/version.ServerName=ecd \
	-X github.com/supsi-dacd-isaac/cosmos-apps/version.ClientName=eccli \
	-X github.com/cosmos/supsi-dacd-isaac/cosmos-apps/version.Version=$(VERSION) \
	-X github.com/supsi-dacd-isaac/cosmos-apps/version.Commit=$(COMMIT)

BUILD_FLAGS := -ldflags '$(ldflags)'

all: install

install: go.sum
		@echo "--> Installing ecmd & ecmcli"
		@go install -mod=readonly $(BUILD_FLAGS) ./cmd/ecmd
		@go install -mod=readonly $(BUILD_FLAGS) ./cmd/ecmcli

install_not_readonly: go.sum
		@echo "--> Installing ecmd & ecmcli (not readonly)"
		@go install $(BUILD_FLAGS) ./cmd/ecmd
		@go install $(BUILD_FLAGS) ./cmd/ecmcli

go.sum: go.mod
		@echo "--> Ensure dependencies have not been modified"
		GO111MODULE=on go mod verify

test:
	@go test -mod=readonly $(PACKAGES)
