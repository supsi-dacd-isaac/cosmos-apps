# Pre-paid Scenario (ps)

_ps_ application is able to save in the sidechain electrical data measured by smart meteres and to tokenize the energy measurements
using the official libraries of [Cosmos-SDK](https://github.com/cosmos/cosmos-sdk).
According to energy produced or consumed by a meter in a defined period, the corresponding amount of tokens of the related account are minted or burnt.
To have _PS_ properly functioning, periodically the community administrator saves on the chain the settings needed for the energy tokenization. 

N.B. When compiling on ARM architecture, iavl>=0.14.2 is required. 
     In case, upgrade the module as described here: https://golang.cafe/blog/upgrade-dependencies-golang.html.

<pre>
go get github.com/tendermint/iavl@v0.14.2
</pre>


