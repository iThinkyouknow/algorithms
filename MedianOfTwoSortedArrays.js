/**
	There are two sorted arrays nums1 and nums2 of size m and n respectively.

	Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

	Example 1:
	nums1 = [1, 3]
	nums2 = [2]
	The median is 2.0

	Example 2:
	nums1 = [1, 2]
	nums2 = [3, 4]

	The median is (2 + 3)/2 = 2.5

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 const {log} = console;
// var findMedianSortedArrays = function(nums1, nums2) {

// 	const insert_array = (nums1.length <= nums2.length) ? nums1 : nums2;
// 	const array_to_be_inserted_into = (nums1.length <= nums2.length) ? nums2 : nums1;
//   const loop_insert_array = (_insert_array) => (return_array) => (i) => {
//   	const val_to_insert = _insert_array[i];
//   	//fn
//   	const get_insert_index = (val) => (__array_to_be_inserted_into) => (start_index) => (end_index) => {
//   		const array_to_be_inserted_into_length = __array_to_be_inserted_into.length;
//   		if (val === undefined) return 0;
//   		if (val >= __array_to_be_inserted_into[array_to_be_inserted_into_length - 1]) return array_to_be_inserted_into_length;
//   		if (val <= __array_to_be_inserted_into[0]) return 0;

//   		const median = Math.round(((end_index - start_index) / 2) + start_index);
  		

//   		if (val >= __array_to_be_inserted_into[median - 1] && val <= __array_to_be_inserted_into[median]) {
//   			return median;
//   		} else {
// 				const new_start_index = (val > __array_to_be_inserted_into[median] && val >= __array_to_be_inserted_into[median - 1]) ? 
//   				median : start_index; 
//   			const new_end_index = (val < __array_to_be_inserted_into[median] && val <= __array_to_be_inserted_into[median - 1]) ? 
//   				median : end_index;
//   			return get_insert_index(val)(__array_to_be_inserted_into)(new_start_index)(new_end_index);
//   		}
//   	};

//   	const index = get_insert_index(val_to_insert)(return_array)(0)(return_array.length - 1);

//   	const new_return_array = ((_return_array) => (i) => (val) => {
//   		if (i === 0) return [val, ..._return_array].filter(x => x !== undefined);
//   		if (i > _return_array.length - 1) return [..._return_array, val].filter(x => x !== undefined);
//   		return [...return_array.slice(0, i), val, ...return_array.slice(i)].filter(x => x !== undefined);
//   	})(return_array)(index)(val_to_insert);

//   	const new_i = i + 1;

//   	if (new_i < _insert_array.length) {
//   		return loop_insert_array(_insert_array)(new_return_array)(new_i);
//   	} else {
//   		return new_return_array;
//   	}
//   };

//   const merged_array = loop_insert_array(insert_array)(array_to_be_inserted_into)(0);

//   const median = Math.round((merged_array.length - 1) / 2);
//   const median_value = (merged_array.length % 2) ? merged_array[median] : ((merged_array[median] + merged_array[median - 1]) / 2);
//   return median_value;
// };

var findMedianSortedArrays = function(nums1, nums2) {
  const merge_arrays = (array_1) => (array_2) => (return_array) => {
    const get_new_return_array = (_return_array) => (arr_1) => (arr_2) => {
      if ((arr_1.length) && (arr_2.length)) {
        return (arr_1[0] <= arr_2[0]) ? [..._return_array, arr_1[0]] : [..._return_array, arr_2[0]];
      } else if (arr_1.length) {
        return [..._return_array, arr_1[0]];
      } else {
        return [..._return_array, arr_2[0]];
      }
    };

    const new_return_array = get_new_return_array(return_array)(array_1)(array_2);
    
    const new_array_without_first_index = (arr_1) => (arr_2) => {
      if (arr_1.length && arr_2.length) {
        if (arr_1[0] <= arr_2[0]) {
          return [arr_1.slice(1), arr_2]
        } else if (arr_2[0] < arr_1[0])  {
          return [arr_1, arr_2.slice(1)];
        }
      } else if (arr_1.length) {
        return [arr_1.slice(1), arr_2];
      } else if (arr_2.length) {
        return [arr_1, arr_2.slice(1)];
      }
    };

    const new_arrays = new_array_without_first_index(array_1)(array_2);
    const new_array_1 = new_arrays[0];
    const new_array_2 = new_arrays[1];

    if (new_array_1.length || new_array_2.length) {
      return merge_arrays(new_array_1)(new_array_2)(new_return_array);
    } else {
      return new_return_array;
    }
  }

  const merged_array = merge_arrays(nums1)(nums2)([]);
  const median = Math.round((merged_array.length - 1) / 2);
  const median_value = (merged_array.length % 2) ? merged_array[median] : ((merged_array[median] + merged_array[median - 1]) / 2);
  return median_value;
};


const time = process.hrtime();
const result = findMedianSortedArrays([59,66,67,81,83,92,129,304,422,439,448,454,469,510,535,564,568,570,673,678,714,715,731,741,843,948,1012,1012,1018,1094,1097,1103,1116,1117,1127,1130,1145,1254,1276,1330,1339,1348,1354,1356,1379,1389,1407,1420,1435,1436,1439,1449,1457,1467,1479,1492,1587,1620,1634,1670,1727,1754,1798,1838,1948,1977,2129,2138,2201,2211,2223,2270,2286,2323,2327,2328,2375,2391,2424,2426,2468,2497,2567,2598,2675,2738,2791,2797,2841,2892,2902,2906,2925,2973,2995,3026,3072,3081,3095,3126,3139,3146,3146,3183,3255,3284,3325,3374,3426,3429,3493,3506,3570,3584,3599,3615,3626,3647,3740,3747,3843,3874,3896,3928,3950,4058,4068,4087,4131,4138,4138,4148,4160,4168,4216,4224,4225,4239,4308,4337,4383,4419,4484,4490,4559,4594,4647,4652,4706,4769,4833,4901,4962,4993,5005,5024,5057,5068,5080,5115,5201,5212,5232,5358,5418,5429,5443,5473,5515,5546,5588,5618,5664,5665,5684,5706,5728,5732,5762,5788,5801,5898,5985,6010,6019,6075,6107,6116,6130,6198,6236,6244,6247,6267,6306,6328,6366,6431,6448,6461,6578,6585,6587,6646,6648,6764,6820,6834,6892,6901,7070,7085,7089,7182,7209,7216,7315,7332,7348,7416,7540,7559,7564,7573,7624,7672,7676,7683,7731,7763,7808,7908,7912,7918,8008,8012,8045,8047,8073,8123,8150,8159,8175,8193,8297,8326,8333,8386,8416,8417,8444,8453,8455,8468,8523,8539,8643,8666,8691,8697,8736,8758,8796,8798,8815,8819,8826,8838,8874,8932,8945,8951,8958,9040,9059,9068,9084,9107,9163,9228,9256,9286,9294,9359,9378,9418,9474,9539,9545,9576,9604,9758,9782,9796,9825,9967,9999,10054,10086,10198,10235,10363,10366,10432,10455,10475,10482,10499,10595,10628,10663,10673,10704,10730,10739,10747,10763,10847,10897,10925,11029,11063,11067,11073,11102,11109,11164,11205,11225,11233,11243,11266,11288,11338,11339,11480,11484,11533,11611,11746,11764,11833,11940,12027,12050,12119,12175,12189,12206,12217,12240,12295,12299,12340,12343,12371,12372,12437,12453,12470,12613,12645,12667,12721,12746,12838,12846,12851,13149,13150,13230,13235,13248,13304,13349,13369,13409,13420,13473,13496,13535,13543,13635,13676,13729,13748,13776,13821,13855,13926,13980,13989,14012,14088,14102,14137,14146,14163,14257,14259,14323,14367,14391,14404,14436,14454,14465,14468,14604,14620,14642,14672,14745,14795,14867,15006,15036,15091,15159,15272,15277,15309,15370,15517,15543,15565,15573,15653,15669,15693,15700,15738,15745,15859,15880,15918,15991,16006,16012,16070,16076,16124,16130,16187,16214,16219,16254,16389,16415,16420,16471,16473,16477,16525,16543,16557,16570,16594,16598,16645,16704,16752,16773,16786,16797,16827,16904,16935,17016,17085,17140,17151,17160,17185,17202,17266,17307,17348,17379,17383,17417,17428,17439,17452,17479,17494,17568,17619,17689,17705,17744,17814,17840,17876,17939,18007,18008,18071,18122,18147,18161,18181,18223,18260,18299,18355,18411,18496,18513,18523,18529,18538,18604,18636,18653,18685,18736,18761,18770,18815,18844,18868,18903,18977,19034,19047,19150,19204,19210,19237,19282,19289,19310,19388,19419,19431,19441,19524,19557,19607,19675,19713,19732,19918,19945,20008,20021,20032,20034,20113,20175,20197,20219,20263,20447,20456,20495,20525,20540,20584,20654,20667,20673,20685,20689,20766,20816,21038,21078,21111,21133,21192,21234,21311,21335,21362,21374,21392,21408,21492,21496,21618,21674,21735,21749,22053,22068,22200,22208,22227,22232,22245,22311,22316,22335,22434,22436,22437,22451,22472,22500,22536,22549,22582,22647,22681,22871,22882,22885,22926,23070,23079,23122,23122,23157,23238,23278,23360,23471,23482,23487,23490,23497,23546,23605,23655,23718,23750,23844,23852,23906,23961,24021,24027,24062,24074,24133,24141,24173,24177,24194,24226,24264,24332,24421,24443,24472,24603,24603,24606,24682,24768,24779,24785,24978,24983,25015,25037,25038,25058,25107,25108,25117,25141,25179,25234,25333,25339,25340,25372,25456,25478,25485,25521,25528,25528,25549,25561,25588,25767,25816,25840,26073,26209,26313,26393,26420,26471,26496,26498,26513,26540,26562,26568,26651,26670,26688,26711,26736,26736,26752,26763,26801,26814,26822,26832,26837,26843,26846,26877,26886,26917,26945,26956,27016,27029,27083,27123,27137,27165,27195,27196,27238,27399,27445,27458,27470,27568,27570,27585,27591,27726,27755,27759,27901,27904,27937,28002,28049,28127,28132,28132,28140,28203,28208,28234,28306,28332,28345,28351,28366,28411,28454,28535,28537,28550,28604,28638,28640,28756,28761,28768,28909,28921,28982,29036,29121,29174,29188,29196,29197,29225,29267,29301,29321,29343,29370,29431,29447,29477,29534,29615,29669,29683,29700,29710,29741,29747,29804,29823,29828,29869,29896,29981,30079,30228,30269,30311,30345,30456,30492,30536,30596,30650,30668,30725,30767,30795,30862,30923,30953,30967,30980,31009,31085,31098,31148,31161,31200,31216,31252,31256,31390,31401,31419,31419,31519,31539,31562,31677,31750,31843,31852,31886,31904,31910,31931,31943,31947,31979,32048,32060,32067,32168,32248,32272,32298,32334,32364,32406,32416,32474,32478,32536,32543,32553,32585,32604,32645,32698,32712,32724],
[8,230,299,300,304,322,401,534,560,573,612,613,768,803,839,1101,1149,1246,1249,1421,1427,1531,1560,1572,1584,1735,1790,1823,1845,1857,1911,2001,2091,2160,2244,2251,2296,2307,2333,2359,2439,2447,2500,2580,2645,2676,2729,2804,2808,2821,2869,2989,3128,3166,3263,3336,3378,3473,3605,3607,3765,3806,3874,3932,4024,4025,4151,4164,4165,4276,4365,4608,4633,4890,5000,5087,5169,5169,5202,5219,5423,5434,5467,5585,5621,5763,5837,5956,6158,6203,6249,6272,6593,6603,6625,6653,6705,6707,6712,6801,6875,6890,6998,7021,7082,7125,7125,7200,7273,7321,7540,7549,7838,8076,8123,8141,8219,8343,8433,8568,8603,8653,8665,8797,9085,9216,9303,9344,9349,9399,9445,9664,9851,9861,10131,10172,10255,10584,10669,10860,10861,11111,11116,11186,11198,11396,11442,11495,11612,11615,11634,11665,11667,11755,12037,12124,12243,12337,12339,12400,12402,12473,12479,12684,12708,12886,12893,12911,12966,13023,13150,13239,13466,13628,13672,13748,13879,13887,13908,13981,14056,14415,14437,14468,14504,14579,14630,14680,14815,14873,14944,15216,15327,15347,15594,15747,15748,16116,16129,16135,16214,16268,16301,16326,16393,16534,16564,16575,16612,16705,16809,16832,16911,16944,17182,17311,17338,17390,17544,17640,17642,17662,17679,17681,17796,17918,18079,18149,18168,18184,18186,18266,18397,18426,18611,18634,18715,18863,18969,19117,19299,19391,19401,19455,19530,19544,19558,19578,19612,19770,19794,19820,19878,19935,20054,20148,20233,20235,20250,20295,20522,21043,21073,21109,21254,21293,21341,21436,21519,21530,21687,21702,21803,21922,21950,21965,22007,22174,22214,22318,22321,22336,22409,22455,22518,22528,22603,22875,22884,22915,22982,23132,23188,23212,23237,23271,23365,23372,23441,23470,23499,23525,23561,23648,24040,24184,24264,24284,24333,24390,24457,24530,24575,24679,24796,24874,25092,25097,25196,25498,25529,25587,25738,25828,25889,25987,26011,26063,26064,26163,26176,26248,26463,26699,26757,26768,26772,26953,27086,27193,27642,27690,27695,27735,27739,27801,27806,27892,27897,27925,27927,28093,28152,28153,28191,28252,28352,28391,28537,28651,28759,28780,28851,28916,29062,29071,29136,29346,29478,29478,29621,29648,29732,29734,29757,29915,29937,30042,30056,30090,30119,30151,30308,30320,30325,30545,30599,30669,30698,30701,30798,30812,30822,30895,31060,31103,31278,31488,31645,31685,31878,31892,32115,32142,32169,32310,32317,32423,32426,32546,32621,32650,32729,32743]);
log(process.hrtime(time)[1] / 1000000);
// const result = findMedianSortedArrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
// [0,6]);
log(process.hrtime(time)[1] / 1000000);
log(result);