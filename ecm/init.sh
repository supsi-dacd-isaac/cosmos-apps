#!/usr/bin/env bash

rm -rf ~/.ecmd
rm -rf ~/.ecmcli

ecmd init test --chain-id=encomchain

ecmcli config output json
ecmcli config indent true
ecmcli config trust-node true
ecmcli config chain-id encomchain
ecmcli config keyring-backend test

NEW=ea4ff9fa3e8a06f824b947b573b63c30a288cf172fe553a03f1ff51839fa2b95a0ef9e47a4e8743c4442000e81b23e38d081e65193bfcaf975d8c4a7c0c3f844
OLD=c5694a93541db032e136404cf82ce6d6834da188d7c331078026ecab6d0d555e3fcd39a7eee23f4942c6e193ae236302a6f492e8de8663528043ded0c94eaba8

ecmcli keys add $NEW
ecmcli keys add $OLD

ecmd add-genesis-account $(ecmcli keys show $NEW -a) 100000ectoken,100000000stake
ecmd add-genesis-account $(ecmcli keys show $OLD -a) 100000ectoken,100000000stake

ecmd gentx --name $NEW --keyring-backend test

echo "Collecting genesis txs..."
ecmd collect-gentxs

echo "Validating genesis file..."
ecmd validate-genesis