class Key
{
    constructor(sound, code, animation)
    {
        this.sound = sound
        this.code = code
        this.animation = animation
    }
}
/*
let keys = []
keys.push(new Key('a', 'boom', 97, 'mainDrum 0.1s linear'))
keys.push(new Key('s', 'clap', 115, 'clap 0.1s linear'))
keys.push(new Key('d', 'hihat', 100, ''))
keys.push(new Key('f', 'kick', 102, ''))
keys.push(new Key('g', 'openhat', 103, ''))
keys.push(new Key('h', 'ride', 104, ''))
keys.push(new Key('j', 'snare', 106, ''))
keys.push(new Key('k', 'tink', 107, ''))
keys.push(new Key('l', 'tom', 108, ''))


let keys = 
    {a:new Key('a', 'boom', 97, 'mainDrum 0.1s linear')
    ,s:new Key('s', 'clap', 115, 'clap 0.5s linear')
    ,d:new Key('d', 'hihat', 100, 'hihat 0.1s linear')
    ,f:new Key('f', 'kick', 102, 'kick 0.5s linear')
    ,g:new Key('g', 'openhat', 103, 'openhat 0.1s linear, tom 0.1s linear')
    ,h:new Key('h', 'ride', 104, 'ride 0.05s linear')
    ,j:new Key('j', 'snare', 106, 'snare 1s linear')
    ,k:new Key('k', 'tink', 107, 'tink 0.1s linear')
    ,l:new Key('l', 'tom', 108, 'tom 0.1s linear')
    }
*/
let keys = 
    {a:new Key('boom', 97, 'boom 0.1s linear')
    ,s:new Key('clap', 115, 'clap 0.5s linear')
    ,d:new Key('hihat', 100, 'hihat 0.1s linear')
    ,f:new Key('kick', 102, 'kick 0.5s linear')
    ,g:new Key('openhat', 103, 'openhat 0.1s linear, tom 0.1s linear')
    ,h:new Key('ride', 104, 'ride 0.05s linear')
    ,j:new Key('snare', 106, 'snare 1s linear')
    ,k:new Key('tink', 107, 'tink 0.1s linear')
    ,l:new Key('tom', 108, 'tom 0.1s linear')
    }


// Creates the HTML 
let code = '';

for (let key in keys)
{
    let html = document.getElementById('key').innerHTML
    html = html.replace(/{Name}/g, key)
    html = html.replace(/{Sound}/g, keys[key].sound)
    code += html
}

document.getElementById('keys').innerHTML = code

// Captures the key press
document.addEventListener('keypress', (keyValue) => 
{
    for (let i in keys)
    {
        if (keys[i].code == keyValue.keyCode)
        {
            playSound(i)
        }
    }
})

function playSound(key)
{
    /*
        Executes the animation and plays the sound
    */
    let name = keys[key].sound;
    let main = document.getElementById(name + '-image')
    main.style.animation = keys[key].animation
    setTimeout(() => {main.style.removeProperty('animation')}, 100)



    let sound = document.getElementById(name)
    /*sound.pause()*/
    sound.currentTime = 0
    sound.play()


    if (key == 'j')
    {

        playAnimation()
    }

}

function playAnimation()
{
    /*
        This animation exists because I couldn't find a way doing it in css!
        This plays only for 'snare'
    */
    const circle1 = document.getElementById('circle1')
    const circle2 = document.getElementById('circle2')
    const circle3 = document.getElementById('circle3')
    const circle4 = document.getElementById('circle4')

    circle1.style.backgroundColor = 'blue';
    setTimeout(() => {  circle1.style.backgroundColor = 'red' }, 500)
    setTimeout(() => {  circle2.style.backgroundColor = 'blue' }, 500)
    setTimeout(() => {  circle2.style.backgroundColor = 'red' }, 900)
    setTimeout(() => {  circle3.style.backgroundColor = 'blue' }, 900)
    setTimeout(() => {  circle3.style.backgroundColor = 'red' }, 1500)
    setTimeout(() => {  circle4.style.backgroundColor = 'blue' }, 1500)
    setTimeout(() => {  circle4.style.backgroundColor = 'red' }, 1900)
    setTimeout(() => {  circle1.style.backgroundColor = 'blue' }, 2000)
    setTimeout(() => {  circle1.style.backgroundColor = 'red' }, 2500)
}

