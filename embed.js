const importObj = {
	...require('./embeds/actions.js'), 
	...require('./embeds/activities.js'),
	...require('./embeds/char.js'),
	...require('./embeds/crew.js'),
	...require('./embeds/districts.js'),
	...require('./embeds/downtime.js'),
	...require('./embeds/engagement.js'),
	...require('./embeds/districts.js'),
	...require('./embeds/status.js'),
	...require('./embeds/vice_trauma.js'),
	...require('./embeds/items.js')
}
for(let prop in importObj){
	module.exports[prop] = importObj[prop];
}

module.exports.help = `**Help**
Here's how I'm used:

\` $help \` Will make the bot post this information into chat.     

**Procedures**
\` $engagement \` Describes the Engagement roll process.
\` $downtime \` Lists the phases for running Downtime (and the appropriate commands).
\` $activites \` Lists the options for downtime activities (and the appropriate commands).

**Character / Crew Creation**
\` $char \` List all character creation steps. \` $char1 \` to \` $char9 \` for more details.
\` $crew \` List all the creation steps.  \` $crew1 \` to \` $crew6 \` for more details.

**Definitions**
\` $actions \` Briefly describes each action. More info via \` $attune \`, \` $consort \`, etc.
\` $trauma \` Describes Trauma conditions.
\` $status \` Describes faction status conditions.
\` $glossary \` Defines common terms.
\` $items \` Describes the standard items.
`;