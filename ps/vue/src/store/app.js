module.exports = {
  types: [
    // this line is used by starport scaffolding
		{ type: "meterAccount", fields: ["meter", "account", "admin", ] },
		{ type: "parameters", fields: ["prodConvFactor", "consConvFactor", "maxConsumption", "penalty", ] },
  ],
};
