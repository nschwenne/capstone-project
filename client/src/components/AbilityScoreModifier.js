import React, {useEffect} from "react"
function AbilityScoreModifier({ id, score }) {

const modifier = Math.floor((score-10)/2)


useEffect(() => {
 document.getElementById(`${id}`).innerHTML = modifier
}, [modifier])
return (
<div>
<p id={id} className="placeholder">

</p>
</div>
)

}

export default AbilityScoreModifier;