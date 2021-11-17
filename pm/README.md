# pm
**pm** (Parity market) is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport).

## scaffold commands

<pre>
starport scaffold single dso idx:string address:string
starport scaffold single aggregator idx:string address:string

starport scaffold map player idx:string address:string role:string

starport scaffold map lem start:int end:int params players
starport scaffold map lemMeasure player:string signal:string timestamp:int value:string mu:string

starport scaffold map sla start:int end:int
starport scaffold map kpi sla:string rule:string limit:string mu:string penalty:int
starport scaffold map kpiMeasure kpi:string player:string timestamp:int value:string mu:string
</pre>

## PM commands

### DSO and Aggregator
**Transactions:**
<pre>
pmd tx pm create-dso aem cosmos1p4rx2hjq2kka688kn0c8y0eltk2hnyn3tj342s --from dstreppa -y
pmd tx pm create-aggregator lic cosmos1p4rx2hjq2kka688kn0c8y0eltk2hnyn3tj342s --from dstreppa -y
</pre>

**Queries:**
<pre>
curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/dso"
curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/aggregator"
</pre>

### Player data sink
N.B. aem is the index in the following row (AEM is a pseudonym)

**Transactions:**
<pre>
pmd tx pm create-player aem cosmos1p4rx2hjq2kka688kn0c8y0eltk2hnyn3tj342s dso --from dstreppa -y
pmd tx pm create-player lic cosmos1p4rx2hjq2kka688kn0c8y0eltk2hnyn3tj342s aggregator --from dstreppa -y
pmd tx pm create-player pros01 addr_pros01 prosumer --from dstreppa -y
pmd tx pm create-player pros02 addr_pros02 prosumer --from dstreppa -y
</pre>

**Queries:**
<pre>
curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/player"
curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/player/aem"
</pre>

### LEM data sink
**Transactions:**
<pre>
# index = start-end-aggregator
pmd tx pm create-lem 1000-1900-lic 1000 1900 green 15 7 20 5 0.2 pros01 pros02 --from dstreppa -y
</pre>

**Queries:**
<pre>
curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/lem"
curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/lem/1000-1900-lic"
</pre>

### LEM measures data sink (oracle is the prosumer-player)
**Transactions:**
<pre>
# index = player-signal-timestamp (e.g. pros02-P-100)
pmd tx pm create-lem-measure pros02-P-100 pros02 P 100 125.6 W --from dstreppa -y
</pre>

**Queries:**
<pre>
curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/lemMeasure"
curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/lemMeasure/pros02-P-100"
</pre>

### SLA data sink
**Transactions:**
<pre>
# index = sla
pmd tx pm create-sla sla01 1000 1900 --from dstreppa -y
</pre>

**Queries:**
<pre>
curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/sla"
curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/sla/sla01"
</pre>

### KPI data sink
**Transactions:**
<pre>
# index = kpi
# rule = gt | lt
pmd tx pm create-kpi kpi01 sla01 gt 3000 W 200 --from dstreppa -y
</pre>

**Queries:**
<pre>
curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/kpi"
curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/kpi/kpi01"
</pre>

### KPI measures data sink
**Transactions:**
<pre>
# index = player-kpi-timestamp (e.g. pros02-P-100)
pmd tx pm create-kpi-measure pros02-kpi01-100 pros02 kpi01 100 850 W --from dstreppa -y
</pre>

**Queries:**
<pre>
curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/kpiMeasure"
curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/kpiMeasure/pros02-kpi01-100"
</pre>

### Useful queries:

<pre>
# First two instance in player list (player should be players!!)
http://localhost:1317/supsi-dacd-isaac/pm/pm/player?pagination.limit=2
# Last two instance in player list
curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/player?pagination.limit=2&pagination.reverse=true"

# Skip the first instance
curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/player?pagination.offset=1"
# Show only second and third instances
curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/player?pagination.offset=1&pagination.limit=2"
# Show only the third instance
curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/player?pagination.offset=2&pagination.limit=1"

curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/lem"
curl -X GET "http://localhost:1317/supsi-dacd-isaac/pm/pm/lem/1000

curl -X GET http://localhost:1317/cosmos/bank/v1beta1/balances/cosmos1p4rx2hjq2kka688kn0c8y0eltk2hnyn3tj342s
curl -X GET http://localhost:1317/cosmos/bank/v1beta1/balances/cosmos1p4rx2hjq2kka688kn0c8y0eltk2hnyn3tj342s/ectoken
</pre>
