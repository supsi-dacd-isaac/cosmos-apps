#!/bin/bash

NEW=ea4ff9fa3e8a06f824b947b573b63c30a288cf172fe553a03f1ff51839fa2b95a0ef9e47a4e8743c4442000e81b23e38d081e65193bfcaf975d8c4a7c0c3f844
OLD=c5694a93541db032e136404cf82ce6d6834da188d7c331078026ecab6d0d555e3fcd39a7eee23f4942c6e193ae236302a6f492e8de8663528043ded0c94eaba8

ecmcli query account $(ecmcli keys show $NEW -a) | jq ".value.coins[0]"
ecmcli query account $(ecmcli keys show $OLD -a) | jq ".value.coins[0]"

# Admin management
ecmcli tx ecm set-admin $NEW --from $NEW -y
ecmcli query ecm admin

# Measures management
# 100 -> UNIX timestamp
# 2 -> energy consumed  (Wh)
ecmcli tx ecm set-measure 100 1 --from $NEW -y
ecmcli query ecm measure energy 100 $NEW

