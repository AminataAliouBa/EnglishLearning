const _0x3ec7c3=_0x5024;function _0x5024(_0x283007,_0x5a0602){const _0x1ecaa3=_0x1eca();return _0x5024=function(_0x5024d9,_0x36bd29){_0x5024d9=_0x5024d9-0xbd;let _0x24ec81=_0x1ecaa3[_0x5024d9];return _0x24ec81;},_0x5024(_0x283007,_0x5a0602);}(function(_0x27856b,_0x48998c){const _0x37f9b7=_0x5024,_0x168b81=_0x27856b();while(!![]){try{const _0x1b517c=-parseInt(_0x37f9b7(0x1b7))/0x1+-parseInt(_0x37f9b7(0x195))/0x2+-parseInt(_0x37f9b7(0xea))/0x3*(parseInt(_0x37f9b7(0x138))/0x4)+parseInt(_0x37f9b7(0x109))/0x5*(-parseInt(_0x37f9b7(0x191))/0x6)+-parseInt(_0x37f9b7(0x1ac))/0x7+-parseInt(_0x37f9b7(0xbe))/0x8*(parseInt(_0x37f9b7(0x124))/0x9)+parseInt(_0x37f9b7(0x151))/0xa;if(_0x1b517c===_0x48998c)break;else _0x168b81['push'](_0x168b81['shift']());}catch(_0x36fd74){_0x168b81['push'](_0x168b81['shift']());}}}(_0x1eca,0x9479f));let startTime,r_startTime,timerInterval,nb_tot_essai=0x0;deb=!![];const verbesIrreguliers=[{'base':_0x3ec7c3(0x10b),'preterit':_0x3ec7c3(0x10b),'participe':_0x3ec7c3(0x10b),'traduction':_0x3ec7c3(0x14b)},{'base':_0x3ec7c3(0xe4),'preterit':_0x3ec7c3(0xe4),'participe':'burst','traduction':_0x3ec7c3(0xc8)},{'base':_0x3ec7c3(0x121),'preterit':_0x3ec7c3(0x121),'participe':_0x3ec7c3(0x121),'traduction':'coûter'},{'base':'cut','preterit':_0x3ec7c3(0x18d),'participe':'cut','traduction':_0x3ec7c3(0x14a)},{'base':_0x3ec7c3(0x1b5),'preterit':'hit','participe':_0x3ec7c3(0x1b5),'traduction':_0x3ec7c3(0x1cf)},{'base':'hurt','preterit':_0x3ec7c3(0x1a8),'participe':_0x3ec7c3(0x1a8),'traduction':_0x3ec7c3(0x10f)},{'base':_0x3ec7c3(0x125),'preterit':_0x3ec7c3(0x125),'participe':'let','traduction':_0x3ec7c3(0x100)},{'base':_0x3ec7c3(0x1c6),'preterit':_0x3ec7c3(0x1c6),'participe':'put','traduction':_0x3ec7c3(0x1d4)},{'base':'shut','preterit':_0x3ec7c3(0xf9),'participe':'shut','traduction':_0x3ec7c3(0x15b)},{'base':_0x3ec7c3(0x141),'preterit':_0x3ec7c3(0x141),'participe':_0x3ec7c3(0x141),'traduction':'étendre,\x20se\x20répandre'},{'base':_0x3ec7c3(0x173),'preterit':_0x3ec7c3(0x173),'participe':_0x3ec7c3(0x173),'traduction':_0x3ec7c3(0x196)},{'base':_0x3ec7c3(0x1d3),'preterit':_0x3ec7c3(0xed),'participe':_0x3ec7c3(0x1d3),'traduction':'devenir'},{'base':'come','preterit':_0x3ec7c3(0x105),'participe':_0x3ec7c3(0x1f6),'traduction':'venir'},{'base':_0x3ec7c3(0x1e3),'preterit':'ran','participe':_0x3ec7c3(0x1e3),'traduction':_0x3ec7c3(0x1aa)},{'base':_0x3ec7c3(0x1f7),'preterit':_0x3ec7c3(0x159),'participe':'made','traduction':_0x3ec7c3(0x187)},{'base':'build','preterit':_0x3ec7c3(0x174),'participe':_0x3ec7c3(0x174),'traduction':_0x3ec7c3(0xee)},{'base':_0x3ec7c3(0x1c5),'preterit':_0x3ec7c3(0x146),'participe':_0x3ec7c3(0x146),'traduction':'plier,\x20se\x20pencher'},{'base':_0x3ec7c3(0x1d7),'preterit':_0x3ec7c3(0xff),'participe':_0x3ec7c3(0xff),'traduction':'rêver'},{'base':_0x3ec7c3(0xd0),'preterit':_0x3ec7c3(0x147),'participe':'burnt','traduction':'brûler'},{'base':_0x3ec7c3(0xd4),'preterit':_0x3ec7c3(0x178),'participe':_0x3ec7c3(0x178),'traduction':_0x3ec7c3(0x1a6)},{'base':_0x3ec7c3(0x10a),'preterit':_0x3ec7c3(0x1f3),'participe':_0x3ec7c3(0x1f3),'traduction':'s\x27agenouiller'},{'base':_0x3ec7c3(0x14d),'preterit':_0x3ec7c3(0x214),'participe':_0x3ec7c3(0x214),'traduction':_0x3ec7c3(0x19a)},{'base':_0x3ec7c3(0x1a9),'preterit':'learnt','participe':_0x3ec7c3(0x120),'traduction':_0x3ec7c3(0x1b2)},{'base':_0x3ec7c3(0xef),'preterit':_0x3ec7c3(0x167),'participe':_0x3ec7c3(0x167),'traduction':_0x3ec7c3(0xcf)},{'base':_0x3ec7c3(0xe1),'preterit':'lent','participe':_0x3ec7c3(0x13b),'traduction':_0x3ec7c3(0x1da)},{'base':'light','preterit':_0x3ec7c3(0x193),'participe':_0x3ec7c3(0x193),'traduction':'allumer,\x20éclairer'},{'base':_0x3ec7c3(0x1a1),'preterit':'lost','participe':_0x3ec7c3(0x1e8),'traduction':'perdre'},{'base':'sleep','preterit':_0x3ec7c3(0x16d),'participe':_0x3ec7c3(0x16d),'traduction':_0x3ec7c3(0xf6)},{'base':'smell','preterit':'smelt','participe':_0x3ec7c3(0x1e6),'traduction':_0x3ec7c3(0x1a6)},{'base':_0x3ec7c3(0x1e9),'preterit':_0x3ec7c3(0x11a),'participe':_0x3ec7c3(0x11a),'traduction':_0x3ec7c3(0xfa)},{'base':_0x3ec7c3(0x104),'preterit':_0x3ec7c3(0xbd),'participe':_0x3ec7c3(0xbd),'traduction':'dépenser'},{'base':'spoil','preterit':_0x3ec7c3(0x1df),'participe':_0x3ec7c3(0x1df),'traduction':'gâter,\x20gâcher'},{'base':_0x3ec7c3(0x1a3),'preterit':_0x3ec7c3(0x139),'participe':'meant','traduction':'signifier'},{'base':_0x3ec7c3(0x17d),'preterit':'sent','participe':_0x3ec7c3(0x19f),'traduction':_0x3ec7c3(0xf1)},{'base':_0x3ec7c3(0x1b8),'preterit':_0x3ec7c3(0x157),'participe':_0x3ec7c3(0x157),'traduction':_0x3ec7c3(0x1e0)},{'base':_0x3ec7c3(0x13d),'preterit':_0x3ec7c3(0x110),'participe':'had','traduction':_0x3ec7c3(0x1f9)},{'base':'hear','preterit':'heard','participe':_0x3ec7c3(0x1bc),'traduction':_0x3ec7c3(0x127)},{'base':_0x3ec7c3(0x1c1),'preterit':_0x3ec7c3(0x20a),'participe':'slid','traduction':_0x3ec7c3(0x1f2)},{'base':'buy','preterit':_0x3ec7c3(0x113),'participe':_0x3ec7c3(0x113),'traduction':'acheter'},{'base':_0x3ec7c3(0xfe),'preterit':_0x3ec7c3(0x1c4),'participe':_0x3ec7c3(0x1c4),'traduction':'attraper'},{'base':_0x3ec7c3(0x131),'preterit':_0x3ec7c3(0x12a),'participe':_0x3ec7c3(0x12a),'traduction':'apporter'},{'base':_0x3ec7c3(0xf2),'preterit':_0x3ec7c3(0x19d),'participe':_0x3ec7c3(0x19d),'traduction':_0x3ec7c3(0x101)},{'base':_0x3ec7c3(0xda),'preterit':_0x3ec7c3(0x136),'participe':_0x3ec7c3(0x136),'traduction':_0x3ec7c3(0x1de)},{'base':'fight','preterit':_0x3ec7c3(0x204),'participe':_0x3ec7c3(0x204),'traduction':_0x3ec7c3(0x10d)},{'base':_0x3ec7c3(0x1dd),'preterit':_0x3ec7c3(0xfb),'participe':_0x3ec7c3(0xfb),'traduction':_0x3ec7c3(0x206)},{'base':'lay','preterit':_0x3ec7c3(0xd2),'participe':_0x3ec7c3(0xd2),'traduction':_0x3ec7c3(0x209)},{'base':_0x3ec7c3(0x1c8),'preterit':_0x3ec7c3(0xe3),'participe':'paid','traduction':_0x3ec7c3(0xfd)},{'base':_0x3ec7c3(0x1db),'preterit':_0x3ec7c3(0x20e),'participe':_0x3ec7c3(0x20e),'traduction':'dire'},{'base':_0x3ec7c3(0x161),'preterit':_0x3ec7c3(0x140),'participe':_0x3ec7c3(0x140),'traduction':_0x3ec7c3(0x188)},{'base':_0x3ec7c3(0x117),'preterit':_0x3ec7c3(0x1b6),'participe':_0x3ec7c3(0x1b6),'traduction':_0x3ec7c3(0x12c)},{'base':'meet','preterit':'met','participe':_0x3ec7c3(0xdd),'traduction':_0x3ec7c3(0xdc)},{'base':_0x3ec7c3(0x17c),'preterit':_0x3ec7c3(0x170),'participe':_0x3ec7c3(0x170),'traduction':_0x3ec7c3(0x175)},{'base':'behold','preterit':_0x3ec7c3(0x1a4),'participe':_0x3ec7c3(0x1a4),'traduction':_0x3ec7c3(0x1f5)},{'base':_0x3ec7c3(0x1ea),'preterit':'led','participe':_0x3ec7c3(0x1ff),'traduction':_0x3ec7c3(0x1be)},{'base':_0x3ec7c3(0x1b9),'preterit':_0x3ec7c3(0x1ed),'participe':_0x3ec7c3(0x1ed),'traduction':_0x3ec7c3(0x1ca)},{'base':_0x3ec7c3(0x1b1),'preterit':_0x3ec7c3(0xf8),'participe':_0x3ec7c3(0xf8),'traduction':_0x3ec7c3(0x1b3)},{'base':_0x3ec7c3(0x154),'preterit':_0x3ec7c3(0x122),'participe':'stuck','traduction':_0x3ec7c3(0xd1)},{'base':'get','preterit':_0x3ec7c3(0x1a2),'participe':'got','traduction':_0x3ec7c3(0x142)},{'base':_0x3ec7c3(0x1d2),'preterit':_0x3ec7c3(0x1e7),'participe':'sold','traduction':_0x3ec7c3(0x118)},{'base':_0x3ec7c3(0xc7),'preterit':'told','participe':_0x3ec7c3(0x169),'traduction':'dire'},{'base':'shine','preterit':_0x3ec7c3(0xf3),'participe':'shone','traduction':_0x3ec7c3(0x130)},{'base':_0x3ec7c3(0x16b),'preterit':_0x3ec7c3(0x12b),'participe':_0x3ec7c3(0x12b),'traduction':_0x3ec7c3(0x1ef)},{'base':_0x3ec7c3(0x10c),'preterit':_0x3ec7c3(0x20b),'participe':'won','traduction':_0x3ec7c3(0x1cd)},{'base':_0x3ec7c3(0x17f),'preterit':_0x3ec7c3(0x217),'participe':_0x3ec7c3(0x217),'traduction':'être\x20assis'},{'base':'spit','preterit':_0x3ec7c3(0x19c),'participe':'spat','traduction':'cracher'},{'base':_0x3ec7c3(0x207),'preterit':_0x3ec7c3(0x1bb),'participe':'bound','traduction':_0x3ec7c3(0x158)},{'base':_0x3ec7c3(0x1bf),'preterit':_0x3ec7c3(0x208),'participe':'found','traduction':_0x3ec7c3(0x160)},{'base':'grind','preterit':'ground','participe':_0x3ec7c3(0x135),'traduction':_0x3ec7c3(0x111)},{'base':_0x3ec7c3(0xbf),'preterit':'wound','participe':_0x3ec7c3(0x1fb),'traduction':'serpenter'},{'base':_0x3ec7c3(0x18a),'preterit':'stood','participe':_0x3ec7c3(0x20f),'traduction':_0x3ec7c3(0x114)},{'base':_0x3ec7c3(0x1a0),'preterit':'understood','participe':_0x3ec7c3(0x107),'traduction':_0x3ec7c3(0x145)},{'base':_0x3ec7c3(0x1c3),'preterit':_0x3ec7c3(0x106),'participe':_0x3ec7c3(0x106),'traduction':_0x3ec7c3(0xf7)},{'base':'misunderstand','preterit':_0x3ec7c3(0x18b),'participe':_0x3ec7c3(0x18b),'traduction':'mécomprendre'},{'base':'begin','preterit':_0x3ec7c3(0x19e),'participe':_0x3ec7c3(0xeb),'traduction':'commencer'},{'base':_0x3ec7c3(0x1b0),'preterit':'clung','participe':_0x3ec7c3(0x115),'traduction':'s\x27accrocher'},{'base':'drink','preterit':_0x3ec7c3(0x15e),'participe':_0x3ec7c3(0xc2),'traduction':_0x3ec7c3(0x11e)},{'base':_0x3ec7c3(0x1ab),'preterit':_0x3ec7c3(0x18f),'participe':_0x3ec7c3(0x1ba),'traduction':'sonner'},{'base':_0x3ec7c3(0x1fa),'preterit':_0x3ec7c3(0x128),'participe':_0x3ec7c3(0xc5),'traduction':_0x3ec7c3(0x20c)},{'base':_0x3ec7c3(0x17b),'preterit':_0x3ec7c3(0x176),'participe':_0x3ec7c3(0x1fd),'traduction':_0x3ec7c3(0xcc)},{'base':_0x3ec7c3(0x16a),'preterit':_0x3ec7c3(0x149),'participe':_0x3ec7c3(0x1d6),'traduction':_0x3ec7c3(0x1cb)},{'base':_0x3ec7c3(0x153),'preterit':_0x3ec7c3(0xf4),'participe':_0x3ec7c3(0x14c),'traduction':_0x3ec7c3(0x210)},{'base':_0x3ec7c3(0x198),'preterit':'broke','participe':'broken','traduction':_0x3ec7c3(0x102)},{'base':_0x3ec7c3(0x171),'preterit':_0x3ec7c3(0x1af),'participe':_0x3ec7c3(0x202),'traduction':_0x3ec7c3(0x162)},{'base':_0x3ec7c3(0x134),'preterit':_0x3ec7c3(0x1e2),'participe':'spoken','traduction':'parler'},{'base':'steal','preterit':_0x3ec7c3(0x148),'participe':_0x3ec7c3(0x1ee),'traduction':_0x3ec7c3(0x1fe)},{'base':_0x3ec7c3(0xe5),'preterit':_0x3ec7c3(0x108),'participe':_0x3ec7c3(0x1e5),'traduction':_0x3ec7c3(0x190)},{'base':'drive','preterit':_0x3ec7c3(0x1ad),'participe':'driven','traduction':_0x3ec7c3(0x1fc)},{'base':_0x3ec7c3(0xec),'preterit':'ate','participe':'eaten','traduction':'manger'},{'base':_0x3ec7c3(0x11d),'preterit':_0x3ec7c3(0x12f),'participe':'fallen','traduction':_0x3ec7c3(0xd9)},{'base':_0x3ec7c3(0x189),'preterit':_0x3ec7c3(0xd8),'participe':_0x3ec7c3(0xc1),'traduction':'interdire'},{'base':_0x3ec7c3(0x152),'preterit':_0x3ec7c3(0x1dc),'participe':_0x3ec7c3(0x143),'traduction':'oublier'},{'base':_0x3ec7c3(0x1c2),'preterit':'forgave','participe':'forgiven','traduction':_0x3ec7c3(0x123)},{'base':'hide','preterit':_0x3ec7c3(0x132),'participe':_0x3ec7c3(0x12e),'traduction':'cacher'},{'base':_0x3ec7c3(0x164),'preterit':_0x3ec7c3(0x1c0),'participe':_0x3ec7c3(0xcb),'traduction':'mordre'},{'base':_0x3ec7c3(0x1f0),'preterit':_0x3ec7c3(0x1ce),'participe':'frozen','traduction':'geler'},{'base':_0x3ec7c3(0x199),'preterit':_0x3ec7c3(0xf0),'participe':_0x3ec7c3(0x16f),'traduction':_0x3ec7c3(0x1cc)},{'base':_0x3ec7c3(0x213),'preterit':_0x3ec7c3(0x15a),'participe':_0x3ec7c3(0x12d),'traduction':'aller\x20à\x20cheval,\x20à\x20bicyclette'},{'base':_0x3ec7c3(0x203),'preterit':_0x3ec7c3(0x119),'participe':_0x3ec7c3(0xd3),'traduction':_0x3ec7c3(0x18e)},{'base':_0x3ec7c3(0xc3),'preterit':_0x3ec7c3(0x1a5),'participe':_0x3ec7c3(0xde),'traduction':_0x3ec7c3(0x212)},{'base':_0x3ec7c3(0x133),'preterit':'shook','participe':'shaken','traduction':_0x3ec7c3(0xc4)},{'base':_0x3ec7c3(0x1d8),'preterit':_0x3ec7c3(0x205),'participe':_0x3ec7c3(0x112),'traduction':_0x3ec7c3(0x197)},{'base':_0x3ec7c3(0x1a7),'preterit':_0x3ec7c3(0x1ae),'participe':_0x3ec7c3(0x200),'traduction':_0x3ec7c3(0x194)},{'base':_0x3ec7c3(0x10e),'preterit':_0x3ec7c3(0x18c),'participe':_0x3ec7c3(0xdb),'traduction':_0x3ec7c3(0x144)},{'base':_0x3ec7c3(0x17e),'preterit':_0x3ec7c3(0x13e),'participe':_0x3ec7c3(0x15c),'traduction':'dessiner'},{'base':_0x3ec7c3(0x16e),'preterit':'flew','participe':_0x3ec7c3(0xd7),'traduction':'voler'},{'base':'grow','preterit':'grew','participe':_0x3ec7c3(0xc0),'traduction':_0x3ec7c3(0xf5)},{'base':'know','preterit':'knew','participe':'known','traduction':_0x3ec7c3(0x183)},{'base':_0x3ec7c3(0x129),'preterit':_0x3ec7c3(0x20d),'participe':_0x3ec7c3(0x179),'traduction':'lancer'},{'base':_0x3ec7c3(0xe9),'preterit':'showed','participe':_0x3ec7c3(0x182),'traduction':'montrer'},{'base':'be','preterit':_0x3ec7c3(0x1d0),'participe':_0x3ec7c3(0x172),'traduction':_0x3ec7c3(0xc6)},{'base':'bear','preterit':'bore','participe':_0x3ec7c3(0x181),'traduction':'porter,supporter'},{'base':'swear','preterit':_0x3ec7c3(0x11b),'participe':'sworn','traduction':_0x3ec7c3(0x177)},{'base':'do','preterit':_0x3ec7c3(0x192),'participe':_0x3ec7c3(0x17a),'traduction':_0x3ec7c3(0x187)},{'base':'go','preterit':_0x3ec7c3(0x1bd),'participe':_0x3ec7c3(0xd5),'traduction':_0x3ec7c3(0x103)},{'base':_0x3ec7c3(0x1e4),'preterit':_0x3ec7c3(0x13f),'participe':'lain','traduction':_0x3ec7c3(0xce)},{'base':'wear','preterit':_0x3ec7c3(0x137),'participe':_0x3ec7c3(0x1eb),'traduction':'porter\x20(sur\x20soi)'}];let verbesRestants=[...verbesIrreguliers],score=0x0;const outputBox=document[_0x3ec7c3(0x184)]('output'),scoreBox=document['getElementById']('score'),totalVerbesBox=document[_0x3ec7c3(0x184)]('total-verbes'),questionBox=document[_0x3ec7c3(0x184)]('question-box');totalVerbesBox[_0x3ec7c3(0x156)]=verbesIrreguliers[_0x3ec7c3(0x150)];function verifierReponses(_0x3ca099,_0x5127ee,_0x5910f3,_0xf163f6,_0x433a2a){const _0x4ae887=_0x3ec7c3;let _0x3b46f6=!![],_0x250d0f=[];document[_0x4ae887(0x184)](_0x4ae887(0xc9))[_0x4ae887(0x156)]='',document[_0x4ae887(0x184)](_0x4ae887(0x166))['textContent']='',document['getElementById'](_0x4ae887(0xfc))['textContent']='';_0x5127ee[_0x4ae887(0xca)]()!==_0x3ca099['traduction']&&(_0x250d0f[_0x4ae887(0xe7)]('traduction'),document[_0x4ae887(0x184)](_0x4ae887(0xd6))[_0x4ae887(0x1d1)][_0x4ae887(0x201)](_0x4ae887(0xdf)),_0x3b46f6=![]);_0x5910f3[_0x4ae887(0xca)]()!==_0x3ca099[_0x4ae887(0xe8)]&&(_0x250d0f[_0x4ae887(0xe7)](_0x4ae887(0xe8)),document[_0x4ae887(0x184)](_0x4ae887(0x15d))['classList'][_0x4ae887(0x201)](_0x4ae887(0xdf)),_0x3b46f6=![]);_0xf163f6[_0x4ae887(0xca)]()!==_0x3ca099['participe']&&(_0x250d0f['push'](_0x4ae887(0x1c9)),document['getElementById'](_0x4ae887(0x155))[_0x4ae887(0x1d1)][_0x4ae887(0x201)](_0x4ae887(0xdf)),_0x3b46f6=![]);if(!_0x3b46f6)return document[_0x4ae887(0x184)](_0x4ae887(0x1c7))[_0x4ae887(0x1d1)][_0x4ae887(0x201)](_0x4ae887(0x1d9)),setTimeout(()=>{const _0x3f88d7=_0x4ae887;document[_0x3f88d7(0x184)](_0x3f88d7(0x1c7))[_0x3f88d7(0x1d1)][_0x3f88d7(0x186)]('incorrect-animation');},0x64),_0x433a2a++,document[_0x4ae887(0x11c)](_0x4ae887(0x215))[_0x4ae887(0x156)]=_0x4ae887(0xcd)+_0x433a2a+'\x20incorrect',document['querySelector']('#essai')['style'][_0x4ae887(0x126)]='block',setTimeout(()=>{const _0x2e9c66=_0x4ae887;document[_0x2e9c66(0x11c)]('#essai')[_0x2e9c66(0x216)][_0x2e9c66(0x126)]=_0x2e9c66(0x1f1);},0x7d0),_0x250d0f[_0x4ae887(0x11f)](_0x392c2e=>{const _0x1631bb=_0x4ae887;document[_0x1631bb(0x184)](_0x1631bb(0x116)+_0x392c2e)['value']='';}),_0x433a2a>=0x3&&(document['getElementById'](_0x4ae887(0xc9))[_0x4ae887(0x156)]=_0x3ca099[_0x4ae887(0x1f4)],document[_0x4ae887(0x184)](_0x4ae887(0x166))[_0x4ae887(0x156)]=_0x3ca099[_0x4ae887(0xe8)],document[_0x4ae887(0x184)](_0x4ae887(0xfc))[_0x4ae887(0x156)]=_0x3ca099[_0x4ae887(0x1c9)],setTimeout(()=>{const _0x475885=_0x4ae887;document[_0x475885(0x184)](_0x475885(0xc9))[_0x475885(0x156)]='',document[_0x475885(0x184)](_0x475885(0x166))['textContent']='',document[_0x475885(0x184)](_0x475885(0xfc))[_0x475885(0x156)]='';},0x7d0)),![];if(_0x3b46f6)return document['getElementById'](_0x4ae887(0x1c7))[_0x4ae887(0x1d1)][_0x4ae887(0x201)](_0x4ae887(0x1f8)),setTimeout(()=>{const _0xf89c28=_0x4ae887;document[_0xf89c28(0x184)](_0xf89c28(0x1c7))[_0xf89c28(0x1d1)][_0xf89c28(0x186)](_0xf89c28(0x1f8));},0x64),score++,scoreBox[_0x4ae887(0x156)]=score,!![];}function commencerRevision(){const _0x869d11=_0x3ec7c3;if(verbesRestants[_0x869d11(0x150)]===0x0){stopTimer(),document[_0x869d11(0x11c)](_0x869d11(0x14f))[_0x869d11(0x156)]=_0x869d11(0x168)+(score/(nb_tot_essai+(Date['now']()-r_startTime)/0x3e8))[_0x869d11(0xe6)](0x2),document[_0x869d11(0x11c)](_0x869d11(0x14f))[_0x869d11(0x216)][_0x869d11(0x126)]='block',document[_0x869d11(0x11c)](_0x869d11(0x19b))[_0x869d11(0x216)]['display']=_0x869d11(0x1f1),document[_0x869d11(0x11c)](_0x869d11(0x165))['style'][_0x869d11(0x126)]='none';return;}const _0x47e68f=verbesRestants[0x0];afficherQuestion(_0x47e68f);}function afficherQuestion(_0x2941f1){const _0x3c0b30=_0x3ec7c3,_0x232d4b=document[_0x3c0b30(0x184)](_0x3c0b30(0x15f));_0x232d4b[_0x3c0b30(0x1b4)]=_0x3c0b30(0x1e1)+_0x2941f1['base'],nb_tot_essai++;let _0x13ba8c=0x0;const _0x468eda=document[_0x3c0b30(0x184)](_0x3c0b30(0xe2));_0x468eda[_0x3c0b30(0x1ec)]=function(){const _0xd0ef8d=_0x3c0b30,_0x1811a5=document[_0xd0ef8d(0x184)](_0xd0ef8d(0xd6))['value'],_0x39e49b=document[_0xd0ef8d(0x184)](_0xd0ef8d(0x15d))[_0xd0ef8d(0x180)],_0x2992fc=document['getElementById'](_0xd0ef8d(0x155))['value'],_0x1c4f5c=verifierReponses(_0x2941f1,_0x1811a5,_0x39e49b,_0x2992fc,_0x13ba8c);_0x1c4f5c?verbesRestants[_0xd0ef8d(0x185)]():_0x13ba8c++,_0x1c4f5c&&setTimeout(()=>{const _0x5a940c=_0xd0ef8d;document['getElementById'](_0x5a940c(0xd6))['value']='',document[_0x5a940c(0x184)](_0x5a940c(0x15d))[_0x5a940c(0x180)]='',document['getElementById'](_0x5a940c(0x155))[_0x5a940c(0x180)]='',document['getElementById'](_0x5a940c(0xd6))['classList'][_0x5a940c(0x186)](_0x5a940c(0xdf)),document['getElementById'](_0x5a940c(0x15d))[_0x5a940c(0x1d1)][_0x5a940c(0x186)](_0x5a940c(0xdf)),document[_0x5a940c(0x184)](_0x5a940c(0x155))[_0x5a940c(0x1d1)][_0x5a940c(0x186)](_0x5a940c(0xdf));},0xa),_0x1c4f5c&&setTimeout(commencerRevision,0x5);};}function _0x1eca(){const _0x404042=['faire','saigner','forbid','stand','misunderstood','blew','cut','s\x27élever,\x20se\x20lever','rang','réveiller','18aDKweC','did','lit','prendre','436522uRcBni','lire','écrire','break','give','garder','#question-box','spat','taught','began','sent','understand','lose','got','mean','beheld','saw','sentir','take','hurt','learn','courir','ring','2131647psVEEZ','drove','took','chose','cling','hang','apprendre','suspendre','innerHTML','hit','fed','85923AueHYd','sweep','dig','rung','bound','heard','went','mener','find','bit','slide','forgive','withstand','caught','bend','put','question-box','pay','participe','creuser','nager','donner','gagner','froze','frapper','was/were','classList','sell','become','mettre','#start','swum','dream','write','incorrect-animation','prêter','say','forgot','seek','penser','spoilt','balayer','Verbe\x20:\x20To\x20','spoke','run','lie','woken','smelt','sold','lost','spell','lead','worn','onclick','dug','stolen','tirer\x20(projectile)','freeze','none','glisser','knelt','traduction','contempler','come','make','correct-animation','avoir,\x20prendre','sing','wound','conduire','sunk','voler','led','taken','add','chosen','rise','fought','wrote','chercher','bind','found','poser\x20à\x20plat','slid','won','chanter','threw','said','stood','s\x27éveiller','block','voir','ride','kept','#essai','style','sat','spent','436304lGzSsS','wind','grown','forbidden','drunk','see','secouer','sung','être','tell','éclater','traduction-error','toLowerCase','bitten','couler,\x20s\x27enfoncer','Essai\x20','s\x27étendre','partir','burn','coller','laid','risen','feel','gone','reponse_traduction','flown','forbade','tomber','think','blown','rencontrer','met','seen','error','timer','lend','submit','paid','burst','wake','toFixed','push','preterit','show','10833CNSblR','begun','eat','became','construire','leave','gave','envoyer','teach','shone','awoke','grandir','dormir','résister','hung','shut','épeler','sought','participe-error','payer','catch','dreamt','permettre','enseigner','casser','aller','spend','came','withstood','understood','woke','1686140OPjAKx','kneel','bet','win','se\x20battre','blow','blesser','had','moudre','written','bought','être\x20debout','clung','reponse_','feed','vendre','rose','spelt','swore','querySelector','fall','boire','forEach','learnt','cost','stuck','pardonner','153jHtgUx','let','display','entendre','sang','throw','brought','shot','se\x20nourrir','ridden','hidden','fell','briller','bring','hid','shake','speak','ground','thought','wore','724wDyLdf','meant','floor','lent','padStart','have','drew','lay','bled','spread','obtenir','forgotten','souffler','comprendre','bent','burnt','stole','swam','couper','parier','awoken','keep','addEventListener','#output-box','length','38092850ksYyyf','forget','awake','stick','reponse_participe','textContent','swept','lier,\x20relier','made','rode','fermer','drawn','reponse_preterit','drank','question','trouver','bleed','choisir','click','bite','#stop','preterit-error','left','Félicitations\x20!\x20Tu\x20as\x20mémorisé\x20tous\x20les\x20verbes\x20!\x20\x0aPerformance\x20:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20','told','swim','shoot','stop','slept','fly','given','held','choose','been','read','built','tenir','sank','jurer','felt','thrown','done','sink','hold','send','draw','sit','value','borne','shown','connaître','getElementById','shift','remove'];_0x1eca=function(){return _0x404042;};return _0x1eca();}function startTimer(){startTime=Date['now'](),deb&&(r_startTime=startTime,deb=![]),timerInterval=setInterval(updateTimer,0x3e8);}function updateTimer(){const _0x11d9de=_0x3ec7c3,_0x348d1e=Date['now'](),_0x5609ca=Math[_0x11d9de(0x13a)]((_0x348d1e-startTime)/0x3e8),_0x5fd9bb=String(Math[_0x11d9de(0x13a)](_0x5609ca/0x3c))[_0x11d9de(0x13c)](0x2,'0'),_0x48443c=String(_0x5609ca%0x3c)[_0x11d9de(0x13c)](0x2,'0');document['getElementById'](_0x11d9de(0xe0))[_0x11d9de(0x156)]=_0x5fd9bb+':'+_0x48443c;}function stopTimer(){clearInterval(timerInterval);}document[_0x3ec7c3(0x184)]('start')[_0x3ec7c3(0x14e)](_0x3ec7c3(0x163),()=>{const _0x157993=_0x3ec7c3;startTimer(),document[_0x157993(0x11c)](_0x157993(0x1d5))[_0x157993(0x216)]['display']=_0x157993(0x1f1),document['querySelector'](_0x157993(0x19b))[_0x157993(0x216)]['display']='block',document[_0x157993(0x11c)](_0x157993(0x165))['style']['display']='block',commencerRevision();}),document[_0x3ec7c3(0x184)](_0x3ec7c3(0x16c))['addEventListener'](_0x3ec7c3(0x163),()=>{const _0x4df96a=_0x3ec7c3;stopTimer(),document[_0x4df96a(0x11c)]('#stop')[_0x4df96a(0x216)][_0x4df96a(0x126)]='none',document[_0x4df96a(0x11c)](_0x4df96a(0x1d5))[_0x4df96a(0x216)][_0x4df96a(0x126)]=_0x4df96a(0x211);});