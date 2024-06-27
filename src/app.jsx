const App = () => {
    const handleClickMinusStep = () => console.log('Clicou no menos do intervalo')
    const handleClickMinusCount = () => console.log('Clicou no menos da contagem')
    const handleClickPlusStep = () => console.log('Clicou no mais do intervalo')
    const handleClickPlusCount = () => console.log('Clicou no mais da contagem')

    return (
        <div className="container">
            <div className="count">
                <button onClick={handleClickMinusStep}>-</button>
                <h2>Intervalo: 1</h2>
                <button onClick={handleClickPlusStep} >+</button>
            </div>
            <div className="count">
                <button onClick={handleClickMinusCount}>-</button>
                <h2>Contagem: 0</h2>
                <button onClick={handleClickPlusCount}>+</button>
            </div>
            <h2>Hoje é quarta, 26 jun. de 2024</h2>
        </div>
    )
}

export { App }