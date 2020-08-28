package utils

import (
	"crypto/sha512"
	"fmt"
	"net"
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
