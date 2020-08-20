#!/usr/bin/env bash

rm -rf ~/.ecmd
rm -rf ~/.ecmcli

ecmd init test --chain-id=encomchain

ecmcli config output json
ecmcli config indent true
ecmcli config trust-node true
ecmcli config chain-id encomchain
ecmcli config keyring-backend test

ecmcli keys add jack
ecmcli keys add alice

ecmd add-genesis-account $(ecmcli keys show jack -a) 100000ectoken,100000000stake
ecmd add-genesis-account $(ecmcli keys show alice -a) 100000ectoken,100000000stake

ecmd gentx --name jack --keyring-backend test

echo "Collecting genesis txs..."
ecmd collect-gentxs

echo "Validating genesis file..."
ecmd validate-genesis