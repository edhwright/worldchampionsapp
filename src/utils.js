export const hthFilter = (boxer, selectedBoxers) => {
    //deep copy the bouts
    let bouts = JSON.parse(JSON.stringify(boxer.boutsFull));

    let selected = new Set();

    //for every fight
    for (let i = 0; i < boxer.boutsFull.length; i++) {
        //check if opp id matches one of selected boxers
        for (let j = 0; j < selectedBoxers.length; j++) {
            if (boxer.boutsFull[i].id === selectedBoxers[j].id) {
                selected.add(bouts[i]);
                break;
            }
        }
    }
    selected = [...selected];
    return selected;
}

export const mutualFilter = (boxer, selectedBoxers) => {
    let bouts = JSON.parse(JSON.stringify(boxer.boutsFull));

    let selected = new Set();

    //for every bout
    for (let i = 0; i < boxer.boutsFull.length; i++) {
        let counter = 0;
        //for every selected boxer
        for (let j = 0; j < selectedBoxers.length; j++) {
            if (boxer.boutsFull[i].id === selectedBoxers[j].id) {
                selected.add(bouts[i]);
                break;
            } else {
                //for every selected boxer bout
                for (let k = 0; k < selectedBoxers[j].boutsFull.length; k++) {
                    if (boxer.boutsFull[i].id === selectedBoxers[j].boutsFull[k].id) {
                        counter++;
                        break;
                    }
                }
            }
        }
        if (counter > 1) {
            selected.add(bouts[i]);
        }
    }
    selected = [...selected];
    return selected;
}

export const calcFilter = (selectedBoxers, filter) => {
    for (let i = 0; i < selectedBoxers.length; i++) {
        if (filter === "headtohead") {
            selectedBoxers[i].bouts = hthFilter(selectedBoxers[i], selectedBoxers);
        } else if (filter === "mutual") {
            selectedBoxers[i].bouts = mutualFilter(selectedBoxers[i], selectedBoxers);
        } else if (filter === "all") {
            selectedBoxers[i].bouts = selectedBoxers[i].boutsFull;
        }
    }
    return selectedBoxers;
}


export const calculateAge = (fight, birthday) => {
    let ageDifMs = fight - birthday;
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const scrollPosition = (embla) => {
    let showShadow;
    let navState = {};

    if (embla.canScrollNext()) {
        navState.next = true;
    } else {
        navState.next = false;
    }

    if (embla.selectedScrollSnap() > 1) {
        showShadow = true;
        navState.previous = true;
    } else {
        showShadow = false;
        navState.previous = false;
    }

    return [showShadow, navState];
}