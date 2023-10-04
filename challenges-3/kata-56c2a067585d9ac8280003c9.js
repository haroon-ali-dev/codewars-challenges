// link: https://www.codewars.com/kata/56c2a067585d9ac8280003c9/train/javascript

//my solution:
function match(candidate, job) {
    for (let skill of job.skills) {
        const findSkill = candidate.skills.find(cSkill => cSkill.name === skill.name);

        if (findSkill) {
            if (findSkill.preference === "avoid") {
                console.log("avoid", skill.name);
                return false;
            };

            const exp = (findSkill.preference === "desired") ? findSkill.experience * 2 : findSkill.experience;

            if (skill.idealYears > exp) {
                if (!checkSubs(skill)) {
                    console.log("subs not sufficient", skill.name);
                    return false;
                }
            }
        } else {
            if (!checkSubs(skill)) {
                console.log("subs not sufficient", skill.name);
                return false;
            }
        }
    }

    console.log(true);
    console.log(candidate, job);

    return true;



}

function checkSubs(skill) {
    if (skill.substitutions.length === 0) {
        console.log("no subs", skill.name);
        return false;
    };

    let checkSubs = false;

    for (let sub of skill.substitutions) {
        const findSubSkill = candidate.skills.find(cSkill => cSkill.name === sub.name);
        if (findSubSkill) {
            const exp = (findSubSkill.preference === "desired") ? findSubSkill.experience * 2 : findSubSkill.experience;

            if (skill.idealYears <= exp) {
                checkSubs = true;
                break;
            }
        }
    }

    if (!checkSubs) {
        console.log("subs not sufficient", skill.name);
        return false;
    }

    return true;
}

const candidate = {
    skills: [
        { name: 'JavaScript', experience: 7, preference: 'neutral' },
        { name: 'Ruby', experience: 2, preference: 'neutral' },
        { name: 'Python', experience: 7, preference: 'neutral' }
    ]
}

const job = {
    skills: [
        { name: 'JavaScript', idealYears: 3, substitutions: [{ name: 'Ruby' }] },
        { name: 'Ruby', idealYears: 3, substitutions: [{ name: 'JavaScript' }, { name: 'Python' }] },
        { name: 'Python', idealYears: 3, substitutions: [{ name: 'JavaScript' }, { name: 'Ruby' }] }
    ]
}

match(candidate, job);