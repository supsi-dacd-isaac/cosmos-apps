# cosmos-apps

_cosmos-apps_ is a collection of applications based on [Cosmos-SDK](https://github.com/cosmos/cosmos-sdk) sidechains for the management of energy communities. 
Considering an energy community of N prosumers, the related sidechain is basically deployed on N embedded devices, which constitute the chain nodes.
Each node corresponds to a prosumer and is able to gather data from the related smart meter.

## Requirements:

`Golang >= 1.13.6`

## Available applications:

## Prepaid-scenario (_ps_):
_ps_ application is able to save in the sidechain electrical data measured by smart meteres and to tokenize the energy measurements
using the official libraries of [Cosmos-SDK](https://github.com/cosmos/cosmos-sdk).
According to energy produced or consumed by a meter in a defined period, the corresponding amount of tokens of the related account are minted or burnt.
To have _PS_ properly functioning, periodically the community administrator saves on the chain the settings needed for the energy tokenization. 

## Acknowledgements
The authors would like to thank the Swiss Federal Office of Energy (SFOE) and the Swiss Competence Center for Energy Research - Future Swiss Electrical Infrastructure (SCCER-FURIES), for their financial and technical support to this research work.
