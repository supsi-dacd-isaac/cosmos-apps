package utils

import (
	"crypto/sha512"
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/types"
	"net"
	"strconv"
	"strings"
)

func GetMacAddr() ([]string, error) {
	netInts, err := net.Interfaces()
	if err != nil {
		return nil, err
	}
	var macs []string
	for _, netInt := range netInts {
		mac := netInt.HardwareAddr.String()
		if mac != "" {
			macs = append(macs, mac)
		}
	}
	return macs, nil
}

func CalcSHA512Hash(input string) string {
	h := sha512.New()
	h.Write([]byte(input))
	macHash := h.Sum(nil)
	return fmt.Sprintf("%x", macHash)
}

func MulCoins(coins sdk.Coins, factorStr string) sdk.Coins {
	coinsStr := coins.String()
	coinsStr = strings.TrimSuffix(coinsStr, types.TokenName)
	coinsInt, _ := strconv.Atoi(coinsStr)
	factor, _ := strconv.Atoi(factorStr)

	coinsInt *= factor

	res, _ := sdk.ParseCoins(fmt.Sprintf("%d%s", coinsInt, types.TokenName))

	return res
}

//func CalcTokens(signal string, value float64, marketPars types.Parameters) sdk.Coins {
//
//	//Default case (data saving not related to tokens minting/burning (i.e. not an energy)
//	strCoins := fmt.Sprintf("%d%s", 0, types.TokenName)
//
//	if signal == "E_cons"{
//		// Energy consumption -> tokens burning
//		conv, _ := strconv.ParseFloat(marketPars.ConsConvFactor, 64)
//		strCoins = fmt.Sprintf("%d%s", int(value*conv), types.TokenName)
//	} else if signal == "E_prod" {
//		// Energy consumption -> tokens minting
//		conv, _ := strconv.ParseFloat(marketPars.ProdConvFactor, 64)
//		strCoins = fmt.Sprintf("%d%s", int(value*conv), types.TokenName)
//	}
//
//	coins, _ := sdk.ParseCoins(strCoins)
//	return coins
//}
