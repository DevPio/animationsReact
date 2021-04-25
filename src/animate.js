export const animateAbout = {
    hidden:{
        opacity:0,
        y:300
    },
    animateShow:{
        opacity:1,
        y:0,
        transition:{
            duration:1
        }
    }
}

export const animateContact = {
    hidden:{
        y:200,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.75
        }
    }
}

export const animateImage = {
    hidden:{
        scale:1
    },
    animate:{
        scale:0,
        transition:{
            duration:2
        }
    }
}

export const fade = {
        hidden:{
            opacity:0,
            scale:0
        },
        show:{
            scale:1,
            opacity:1,
            transition:{
                duration:1
            }
        }
    }