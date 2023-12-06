const xx = WebAssembly.instantiateStreaming(fetch('cool.wasm'), {
    env: {},
}).then(w => {
    return {
        add: w.instance.exports.add,
    }
})

async function main() {
    let res = await xx
    console.log(res.add(12, '122'))
}

main()
