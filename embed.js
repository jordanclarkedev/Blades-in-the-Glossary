const importObj = {
	...require("./embeds/character/actions.js"),
	...require("./embeds/character/charitems.js"),
	...require("./embeds/character/items.js"),
	...require("./embeds/character/vice_trauma.js"),

	...require("./embeds/charCrewCreation/char.js"),
	...require("./embeds/charCrewCreation/crew.js"),

	...require("./embeds/crew/advanceTierUpgrade.js"),
	...require("./embeds/crew/status.js"),

	...require("./embeds/procedures/activities.js"),
	...require("./embeds/procedures/downtime.js"),
	...require("./embeds/procedures/engagement.js"),
	...require("./embeds/procedures/entanglements.js"),

	...require("./embeds/references/districts.js"),
	...require("./embeds/references/glossary.js"),
	...require("./embeds/references/heritage.js"),
};
for (let prop in importObj) {
	module.exports[prop] = importObj[prop];
}

module.exports.help = `**Help**
Type these commands into chat.
Some of them have nested commands, which the bot will prompt you for.

**Procedures**
\` $engagement \` Describes the Engagement roll process.
\` $downtime \` Lists the phases for running Downtime (and the appropriate commands).
\` $activites \` Lists the options for downtime activities (and the appropriate commands).

**Character / Crew Creation**
\` $char \` and \` $crew \` List all character and crew creation steps respectively.

**Crew**
\` $advance \` Describes the process of handling crew advancement.
\` $tier \` Describes rep, hold and tier.
\` $upgrade \` Lists the benefits of the crew upgrades.
\` $status \` Describes faction status conditions.

**Character**
\` $actions \` Briefly describes each action. More info via \` $attune \`, \` $consort \`, etc.
\` $trauma \` Describes Trauma conditions.
\` $items \` Describes the standard items.
Special playbook items can be found by the name of the playbook: \` $cutter \`, \` $whisper \`, etc.

**References**
\` $districts \` Lists districts and their commands.
\` $glossary \` Defines common terms.
\` $heritages \` Gives commands for heritages.`;
