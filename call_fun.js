fetchDataAndProcess()
    .then((globalData) => {
        createLineChart(globalData);
        
        const atrValues = calculateATR(globalData);
        console.log("ATR Values:", atrValues);

        const DCW = calculateDCW(globalData, period = 40);
        console.log("DCW Values:", DCW);

        const DCW_ATR = calculateDCWATRRatio(DCW, atrValues);
        console.log("DCW/ATR Ratio Values:", DCW_ATR);
        createbarChart(DCW_ATR);

        
        const dates = globalData.map(entry => entry.Date);
        const opens = globalData.map(entry => entry.Open);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
