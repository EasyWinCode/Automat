define(function () {
    
    var _fixedParams = {
        
            lots    : {
                1 : {
                    'src'   : 'amiu.png',
                    'rate'  : 100,
                    'type'  : 'amiu'
                },
                2 : {
                    'src'   : 'avia.png',
                    'rate'  : 100,
                    'type'  : 'avia'
                },	
                3 : {
                    'src'   : 'ap.png',
                    'rate'  : 100,
                    'type'  : 'ap'
                },
				4 : {
                    'src'   : 'amiu.png',
                    'rate'  : 100,
                    'type'  : 'amiu'
                },
                5 : {
                    'src'   : 'bgii.png',
                    'rate'  : 100,
                    'type'  : 'bgii'
                },
                6 : {
                    'src'   : 'bivm.png',
                    'rate'  : 100,
                    'type'  : 'bivm'
                },
                7 : {
                    'src'   : 'dt.png',
                    'rate'  : 100,
                    'type'  : 'dt'
                },
                8 : {
                    'src'   : 'is.png',
                    'rate'  : 100,
                    'type'  : 'is'
                },
                9 : {
                    'src'   : 'ibim.png',
                    'rate'  : 100,
                    'type'  : 'ibim'
                },
                10 : {
                    'src'   : 'ifkis.png',
                    'rate'  : 100,
                    'type'  : 'ifkis'
                },
                11 : {
                    'src'   : 'iivt.png',
                    'rate'  : 100,
                    'type'  : 'iivt'
                }
                
            },
            
            symbolWidth         : 216,  // px
            
            symbolHeight        : 144,  // px

            slotCount           : 3,    // column count
            lineCount           : 3,    // row count

            centerLine          : 2,    // win line

            speed               : 12,   // offset per iteration, px

            winAnimationCount   : 5,    // win keyframes count

            stopGameDelay       : 1000, // ms
            stopSlotDelay       : 1000, // ms  

            winAnimationDelay   : 200   // ms
    };
    
    var _calcParams = {
            lotsCount           : null,      
            width               : null,
            height              : null,           
            itemsInSlotAmount   : null,  
            slotHeight          : null,
            duplicateCount      : null
    };
    
    
    _calcParams.lotsCount           = Object.keys(_fixedParams.lots).length; 
    _calcParams.duplicateCount      = parseInt(_fixedParams.lineCount / _calcParams.lotsCount) + 1;
    _calcParams.width               = _fixedParams.symbolWidth * _fixedParams.slotCount;
    _calcParams.height              = _fixedParams.lineCount * _fixedParams.symbolHeight;          
    _calcParams.itemsInSlotAmount   = _calcParams.lotsCount * _calcParams.duplicateCount;  
    _calcParams.slotHeight          = _calcParams.itemsInSlotAmount * _fixedParams.symbolHeight; 
    
    
    var _mergedParams = Object.assign(_fixedParams, _calcParams);
    
    return _mergedParams;
    
});
