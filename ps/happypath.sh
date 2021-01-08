#!/bin/bash

NEW=ea4ff9fa3e8a06f824b947b573b63c30a288cf172fe553a03f1ff51839fa2b95a0ef9e47a4e8743c4442000e81b23e38d081e65193bfcaf975d8c4a7c0c3f844
OLD=c5694a93541db032e136404cf82ce6d6834da188d7c331078026ecab6d0d555e3fcd39a7eee23f4942c6e193ae236302a6f492e8de8663528043ded0c94eaba8

pscli query account $(pscli keys show $NEW -a) | jq ".value.coins[0]"
pscli query account $(pscli keys show $OLD -a) | jq ".value.coins[0]"

# Admin register management
pscli tx ps set-admin $NEW --from $NEW -y
pscli query ps admin

# Allowed register management
pscli tx ps set-allowed $NEW,$OLD --from $NEW -y
pscli query ps allowed

# Parameter register management
pscli tx ps set-parameters 1 2 100 10 --from $NEW -y
pscli query ps list-parameters

# Tokens minting (performed by the administrator)
pscli tx ps tokens-minting 20 $(pscli keys show $NEW -a) --from $NEW -y
pscli tx ps tokens-minting 20 $(pscli keys show $OLD -a) --from $NEW -y

# Measures management
# 100 -> UNIX timestamp
# 2 -> energy consumed  (Wh)
pscli tx ps set-measure 100 1 --from $NEW -y
pscli tx ps set-measure 100 1 --from $NEW -y | jq ".txhash" | xargs $(sleep 6) pscli q tx
pscli query ps measure energy 100 $NEW

# Create correspondences meter-account
pscli tx ps create-meterAccount $NEW $(pscli keys show $NEW -a) --from $NEW -y
pscli tx ps create-meterAccount $OLD $(pscli keys show $OLD -a) --from $NEW -y
pscli query ps list-meterAccount



