#!/bin/bash

ecmcli query account $(ecmcli keys show jack -a) | jq ".value.coins[0]"
ecmcli query account $(ecmcli keys show alice -a) | jq ".value.coins[0]"

# 108 -> timestamp
# 2 -> energy consumed  (Wh)
ecmcli tx ecm set-measure 108 2 --from alice -y | jq ".txhash" | xargs $(sleep 6) ecmcli q tx

ecmcli query ecm measure energy 108 $(ecmcli keys show alice -a)