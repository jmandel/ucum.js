(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "10*": {
    "value": 10,
    "ucum": "1"
  },
  "10^": {
    "value": 10,
    "ucum": "1"
  },
  "[pi]": {
    "value": 3.141592653589793,
    "ucum": "1"
  },
  "%": {
    "value": 1,
    "ucum": "10*-2"
  },
  "[ppth]": {
    "value": 1,
    "ucum": "10*-3"
  },
  "[ppm]": {
    "value": 1,
    "ucum": "10*-6"
  },
  "[ppb]": {
    "value": 1,
    "ucum": "10*-9"
  },
  "[pptr]": {
    "value": 1,
    "ucum": "10*-12"
  },
  "mol": {
    "value": 6.0221367,
    "ucum": "10*23"
  },
  "sr": {
    "value": 1,
    "ucum": "rad2"
  },
  "Hz": {
    "value": 1,
    "ucum": "s-1"
  },
  "N": {
    "value": 1,
    "ucum": "kg.m/s2"
  },
  "Pa": {
    "value": 1,
    "ucum": "N/m2"
  },
  "J": {
    "value": 1,
    "ucum": "N.m"
  },
  "W": {
    "value": 1,
    "ucum": "J/s"
  },
  "A": {
    "value": 1,
    "ucum": "C/s"
  },
  "V": {
    "value": 1,
    "ucum": "J/C"
  },
  "F": {
    "value": 1,
    "ucum": "C/V"
  },
  "Ohm": {
    "value": 1,
    "ucum": "V/A"
  },
  "S": {
    "value": 1,
    "ucum": "Ohm-1"
  },
  "Wb": {
    "value": 1,
    "ucum": "V.s"
  },
  "Cel": {
    "ucum": "cel(1 K)"
  },
  "T": {
    "value": 1,
    "ucum": "Wb/m2"
  },
  "H": {
    "value": 1,
    "ucum": "Wb/A"
  },
  "lm": {
    "value": 1,
    "ucum": "cd.sr"
  },
  "lx": {
    "value": 1,
    "ucum": "lm/m2"
  },
  "Bq": {
    "value": 1,
    "ucum": "s-1"
  },
  "Gy": {
    "value": 1,
    "ucum": "J/kg"
  },
  "Sv": {
    "value": 1,
    "ucum": "J/kg"
  },
  "gon": {
    "value": 0.9,
    "ucum": "deg"
  },
  "deg": {
    "value": 2,
    "ucum": "[pi].rad/360"
  },
  "'": {
    "value": 1,
    "ucum": "deg/60"
  },
  "''": {
    "value": 1,
    "ucum": "'/60"
  },
  "l": {
    "value": 1,
    "ucum": "dm3"
  },
  "L": {
    "value": 1,
    "ucum": "l"
  },
  "ar": {
    "value": 100,
    "ucum": "m2"
  },
  "min": {
    "value": 60,
    "ucum": "s"
  },
  "h": {
    "value": 60,
    "ucum": "min"
  },
  "d": {
    "value": 24,
    "ucum": "h"
  },
  "a_t": {
    "value": 365.24219,
    "ucum": "d"
  },
  "a_j": {
    "value": 365.25,
    "ucum": "d"
  },
  "a_g": {
    "value": 365.2425,
    "ucum": "d"
  },
  "a": {
    "value": 1,
    "ucum": "a_j"
  },
  "wk": {
    "value": 7,
    "ucum": "d"
  },
  "mo_s": {
    "value": 29.53059,
    "ucum": "d"
  },
  "mo_j": {
    "value": 1,
    "ucum": "a_j/12"
  },
  "mo_g": {
    "value": 1,
    "ucum": "a_g/12"
  },
  "mo": {
    "value": 1,
    "ucum": "mo_j"
  },
  "t": {
    "value": 1000,
    "ucum": "kg"
  },
  "bar": {
    "value": 100000,
    "ucum": "Pa"
  },
  "u": {
    "value": 1.6605402000000002e-24,
    "ucum": "g"
  },
  "eV": {
    "value": 1,
    "ucum": "[e].V"
  },
  "AU": {
    "value": 149597.870691,
    "ucum": "Mm"
  },
  "pc": {
    "value": 30856780000000000,
    "ucum": "m"
  },
  "[c]": {
    "value": 299792458,
    "ucum": "m/s"
  },
  "[h]": {
    "value": 6.6260755e-24,
    "ucum": "J.s"
  },
  "[k]": {
    "value": 1.380658e-23,
    "ucum": "J/K"
  },
  "[eps_0]": {
    "value": 8.854187816999999e-12,
    "ucum": "F/m"
  },
  "[mu_0]": {
    "value": 1,
    "ucum": "4.[pi].10*-7.N/A2"
  },
  "[e]": {
    "value": 1.60217733e-19,
    "ucum": "C"
  },
  "[m_e]": {
    "value": 9.1093897e-28,
    "ucum": "g"
  },
  "[m_p]": {
    "value": 1.6726231000000002e-24,
    "ucum": "g"
  },
  "[G]": {
    "value": 6.67259e-11,
    "ucum": "m3.kg-1.s-2"
  },
  "[g]": {
    "value": 9.806650000000001,
    "ucum": "m/s2"
  },
  "atm": {
    "value": 101325,
    "ucum": "Pa"
  },
  "[ly]": {
    "value": 1,
    "ucum": "[c].a_j"
  },
  "gf": {
    "value": 1,
    "ucum": "g.[g]"
  },
  "[lbf_av]": {
    "value": 1,
    "ucum": "[lb_av].[g]"
  },
  "Ky": {
    "value": 1,
    "ucum": "cm-1"
  },
  "Gal": {
    "value": 1,
    "ucum": "cm/s2"
  },
  "dyn": {
    "value": 1,
    "ucum": "g.cm/s2"
  },
  "erg": {
    "value": 1,
    "ucum": "dyn.cm"
  },
  "P": {
    "value": 1,
    "ucum": "dyn.s/cm2"
  },
  "Bi": {
    "value": 10,
    "ucum": "A"
  },
  "St": {
    "value": 1,
    "ucum": "cm2/s"
  },
  "Mx": {
    "value": 1e-8,
    "ucum": "Wb"
  },
  "G": {
    "value": 0.0001,
    "ucum": "T"
  },
  "Oe": {
    "value": 250,
    "ucum": "/[pi].A/m"
  },
  "Gb": {
    "value": 1,
    "ucum": "Oe.cm"
  },
  "sb": {
    "value": 1,
    "ucum": "cd/cm2"
  },
  "Lmb": {
    "value": 1,
    "ucum": "cd/cm2/[pi]"
  },
  "ph": {
    "value": 0.0001,
    "ucum": "lx"
  },
  "Ci": {
    "value": 37000000000,
    "ucum": "Bq"
  },
  "R": {
    "value": 0.00025800000000000004,
    "ucum": "C/kg"
  },
  "RAD": {
    "value": 100,
    "ucum": "erg/g"
  },
  "REM": {
    "value": 1,
    "ucum": "RAD"
  },
  "[in_i]": {
    "value": 2.54,
    "ucum": "cm"
  },
  "[ft_i]": {
    "value": 12,
    "ucum": "[in_i]"
  },
  "[yd_i]": {
    "value": 3,
    "ucum": "[ft_i]"
  },
  "[mi_i]": {
    "value": 5280,
    "ucum": "[ft_i]"
  },
  "[fth_i]": {
    "value": 6,
    "ucum": "[ft_i]"
  },
  "[nmi_i]": {
    "value": 1852,
    "ucum": "m"
  },
  "[kn_i]": {
    "value": 1,
    "ucum": "[nmi_i]/h"
  },
  "[sin_i]": {
    "value": 1,
    "ucum": "[in_i]2"
  },
  "[sft_i]": {
    "value": 1,
    "ucum": "[ft_i]2"
  },
  "[syd_i]": {
    "value": 1,
    "ucum": "[yd_i]2"
  },
  "[cin_i]": {
    "value": 1,
    "ucum": "[in_i]3"
  },
  "[cft_i]": {
    "value": 1,
    "ucum": "[ft_i]3"
  },
  "[cyd_i]": {
    "value": 1,
    "ucum": "[yd_i]3"
  },
  "[bf_i]": {
    "value": 144,
    "ucum": "[in_i]3"
  },
  "[cr_i]": {
    "value": 128,
    "ucum": "[ft_i]3"
  },
  "[mil_i]": {
    "value": 0.001,
    "ucum": "[in_i]"
  },
  "[cml_i]": {
    "value": 1,
    "ucum": "[pi]/4.[mil_i]2"
  },
  "[hd_i]": {
    "value": 4,
    "ucum": "[in_i]"
  },
  "[ft_us]": {
    "value": 1200,
    "ucum": "m/3937"
  },
  "[yd_us]": {
    "value": 3,
    "ucum": "[ft_us]"
  },
  "[in_us]": {
    "value": 1,
    "ucum": "[ft_us]/12"
  },
  "[rd_us]": {
    "value": 16.5,
    "ucum": "[ft_us]"
  },
  "[ch_us]": {
    "value": 4,
    "ucum": "[rd_us]"
  },
  "[lk_us]": {
    "value": 1,
    "ucum": "[ch_us]/100"
  },
  "[rch_us]": {
    "value": 100,
    "ucum": "[ft_us]"
  },
  "[rlk_us]": {
    "value": 1,
    "ucum": "[rch_us]/100"
  },
  "[fth_us]": {
    "value": 6,
    "ucum": "[ft_us]"
  },
  "[fur_us]": {
    "value": 40,
    "ucum": "[rd_us]"
  },
  "[mi_us]": {
    "value": 8,
    "ucum": "[fur_us]"
  },
  "[acr_us]": {
    "value": 160,
    "ucum": "[rd_us]2"
  },
  "[srd_us]": {
    "value": 1,
    "ucum": "[rd_us]2"
  },
  "[smi_us]": {
    "value": 1,
    "ucum": "[mi_us]2"
  },
  "[sct]": {
    "value": 1,
    "ucum": "[mi_us]2"
  },
  "[twp]": {
    "value": 36,
    "ucum": "[sct]"
  },
  "[mil_us]": {
    "value": 0.001,
    "ucum": "[in_us]"
  },
  "[in_br]": {
    "value": 2.539998,
    "ucum": "cm"
  },
  "[ft_br]": {
    "value": 12,
    "ucum": "[in_br]"
  },
  "[rd_br]": {
    "value": 16.5,
    "ucum": "[ft_br]"
  },
  "[ch_br]": {
    "value": 4,
    "ucum": "[rd_br]"
  },
  "[lk_br]": {
    "value": 1,
    "ucum": "[ch_br]/100"
  },
  "[fth_br]": {
    "value": 6,
    "ucum": "[ft_br]"
  },
  "[pc_br]": {
    "value": 2.5,
    "ucum": "[ft_br]"
  },
  "[yd_br]": {
    "value": 3,
    "ucum": "[ft_br]"
  },
  "[mi_br]": {
    "value": 5280,
    "ucum": "[ft_br]"
  },
  "[nmi_br]": {
    "value": 6080,
    "ucum": "[ft_br]"
  },
  "[kn_br]": {
    "value": 1,
    "ucum": "[nmi_br]/h"
  },
  "[acr_br]": {
    "value": 4840,
    "ucum": "[yd_br]2"
  },
  "[gal_us]": {
    "value": 231,
    "ucum": "[in_i]3"
  },
  "[bbl_us]": {
    "value": 42,
    "ucum": "[gal_us]"
  },
  "[qt_us]": {
    "value": 1,
    "ucum": "[gal_us]/4"
  },
  "[pt_us]": {
    "value": 1,
    "ucum": "[qt_us]/2"
  },
  "[gil_us]": {
    "value": 1,
    "ucum": "[pt_us]/4"
  },
  "[foz_us]": {
    "value": 1,
    "ucum": "[gil_us]/4"
  },
  "[fdr_us]": {
    "value": 1,
    "ucum": "[foz_us]/8"
  },
  "[min_us]": {
    "value": 1,
    "ucum": "[fdr_us]/60"
  },
  "[crd_us]": {
    "value": 128,
    "ucum": "[ft_i]3"
  },
  "[bu_us]": {
    "value": 2150.42,
    "ucum": "[in_i]3"
  },
  "[gal_wi]": {
    "value": 1,
    "ucum": "[bu_us]/8"
  },
  "[pk_us]": {
    "value": 1,
    "ucum": "[bu_us]/4"
  },
  "[dqt_us]": {
    "value": 1,
    "ucum": "[pk_us]/8"
  },
  "[dpt_us]": {
    "value": 1,
    "ucum": "[dqt_us]/2"
  },
  "[tbs_us]": {
    "value": 1,
    "ucum": "[foz_us]/2"
  },
  "[tsp_us]": {
    "value": 1,
    "ucum": "[tbs_us]/3"
  },
  "[cup_us]": {
    "value": 16,
    "ucum": "[tbs_us]"
  },
  "[foz_m]": {
    "value": 30,
    "ucum": "mL"
  },
  "[cup_m]": {
    "value": 240,
    "ucum": "mL"
  },
  "[tsp_m]": {
    "value": 5,
    "ucum": "mL"
  },
  "[tbs_m]": {
    "value": 15,
    "ucum": "mL"
  },
  "[gal_br]": {
    "value": 4.54609,
    "ucum": "l"
  },
  "[pk_br]": {
    "value": 2,
    "ucum": "[gal_br]"
  },
  "[bu_br]": {
    "value": 4,
    "ucum": "[pk_br]"
  },
  "[qt_br]": {
    "value": 1,
    "ucum": "[gal_br]/4"
  },
  "[pt_br]": {
    "value": 1,
    "ucum": "[qt_br]/2"
  },
  "[gil_br]": {
    "value": 1,
    "ucum": "[pt_br]/4"
  },
  "[foz_br]": {
    "value": 1,
    "ucum": "[gil_br]/5"
  },
  "[fdr_br]": {
    "value": 1,
    "ucum": "[foz_br]/8"
  },
  "[min_br]": {
    "value": 1,
    "ucum": "[fdr_br]/60"
  },
  "[gr]": {
    "value": 64.79891,
    "ucum": "mg"
  },
  "[lb_av]": {
    "value": 7000,
    "ucum": "[gr]"
  },
  "[oz_av]": {
    "value": 1,
    "ucum": "[lb_av]/16"
  },
  "[dr_av]": {
    "value": 1,
    "ucum": "[oz_av]/16"
  },
  "[scwt_av]": {
    "value": 100,
    "ucum": "[lb_av]"
  },
  "[lcwt_av]": {
    "value": 112,
    "ucum": "[lb_av]"
  },
  "[ston_av]": {
    "value": 20,
    "ucum": "[scwt_av]"
  },
  "[lton_av]": {
    "value": 20,
    "ucum": "[lcwt_av]"
  },
  "[stone_av]": {
    "value": 14,
    "ucum": "[lb_av]"
  },
  "[pwt_tr]": {
    "value": 24,
    "ucum": "[gr]"
  },
  "[oz_tr]": {
    "value": 20,
    "ucum": "[pwt_tr]"
  },
  "[lb_tr]": {
    "value": 12,
    "ucum": "[oz_tr]"
  },
  "[sc_ap]": {
    "value": 20,
    "ucum": "[gr]"
  },
  "[dr_ap]": {
    "value": 3,
    "ucum": "[sc_ap]"
  },
  "[oz_ap]": {
    "value": 8,
    "ucum": "[dr_ap]"
  },
  "[lb_ap]": {
    "value": 12,
    "ucum": "[oz_ap]"
  },
  "[oz_m]": {
    "value": 28,
    "ucum": "g"
  },
  "[lne]": {
    "value": 1,
    "ucum": "[in_i]/12"
  },
  "[pnt]": {
    "value": 1,
    "ucum": "[lne]/6"
  },
  "[pca]": {
    "value": 12,
    "ucum": "[pnt]"
  },
  "[pnt_pr]": {
    "value": 0.013837,
    "ucum": "[in_i]"
  },
  "[pca_pr]": {
    "value": 12,
    "ucum": "[pnt_pr]"
  },
  "[pied]": {
    "value": 32.48,
    "ucum": "cm"
  },
  "[pouce]": {
    "value": 1,
    "ucum": "[pied]/12"
  },
  "[ligne]": {
    "value": 1,
    "ucum": "[pouce]/12"
  },
  "[didot]": {
    "value": 1,
    "ucum": "[ligne]/6"
  },
  "[cicero]": {
    "value": 12,
    "ucum": "[didot]"
  },
  "[degF]": {
    "ucum": "degf(5 K/9)"
  },
  "[degR]": {
    "value": 5,
    "ucum": "K/9"
  },
  "cal_[15]": {
    "value": 4.1858,
    "ucum": "J"
  },
  "cal_[20]": {
    "value": 4.1819,
    "ucum": "J"
  },
  "cal_m": {
    "value": 4.19002,
    "ucum": "J"
  },
  "cal_IT": {
    "value": 4.1868,
    "ucum": "J"
  },
  "cal_th": {
    "value": 4.184,
    "ucum": "J"
  },
  "cal": {
    "value": 1,
    "ucum": "cal_th"
  },
  "[Cal]": {
    "value": 1,
    "ucum": "kcal_th"
  },
  "[Btu_39]": {
    "value": 1.05967,
    "ucum": "kJ"
  },
  "[Btu_59]": {
    "value": 1.0548,
    "ucum": "kJ"
  },
  "[Btu_60]": {
    "value": 1.05468,
    "ucum": "kJ"
  },
  "[Btu_m]": {
    "value": 1.05587,
    "ucum": "kJ"
  },
  "[Btu_IT]": {
    "value": 1.05505585262,
    "ucum": "kJ"
  },
  "[Btu_th]": {
    "value": 1.05435,
    "ucum": "kJ"
  },
  "[Btu]": {
    "value": 1,
    "ucum": "[Btu_th]"
  },
  "[HP]": {
    "value": 550,
    "ucum": "[ft_i].[lbf_av]/s"
  },
  "tex": {
    "value": 1,
    "ucum": "g/km"
  },
  "[den]": {
    "value": 1,
    "ucum": "g/9/km"
  },
  "m[H2O]": {
    "value": 9.806650000000001,
    "ucum": "kPa"
  },
  "m[Hg]": {
    "value": 133.322,
    "ucum": "kPa"
  },
  "[in_i'H2O]": {
    "value": 1,
    "ucum": "m[H2O].[in_i]/m"
  },
  "[in_i'Hg]": {
    "value": 1,
    "ucum": "m[Hg].[in_i]/m"
  },
  "[PRU]": {
    "value": 1,
    "ucum": "mm[Hg].s/ml"
  },
  "[wood'U]": {
    "value": 1,
    "ucum": "mm[Hg].min/L"
  },
  "[diop]": {
    "value": 1,
    "ucum": "/m"
  },
  "[p'diop]": {
    "ucum": "100tan(1 rad)"
  },
  "%[slope]": {
    "ucum": "100tan(1 rad)"
  },
  "[mesh_i]": {
    "value": 1,
    "ucum": "/[in_i]"
  },
  "[Ch]": {
    "value": 1,
    "ucum": "mm/3"
  },
  "[drp]": {
    "value": 1,
    "ucum": "ml/20"
  },
  "[hnsf'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[MET]": {
    "value": 3.5,
    "ucum": "mL/min/kg"
  },
  "[hp'_X]": {
    "ucum": "hpX(1 1)"
  },
  "[hp'_C]": {
    "ucum": "hpC(1 1)"
  },
  "[hp'_M]": {
    "ucum": "hpM(1 1)"
  },
  "[hp'_Q]": {
    "ucum": "hpQ(1 1)"
  },
  "[hp_X]": {
    "value": 1,
    "ucum": "1"
  },
  "[hp_C]": {
    "value": 1,
    "ucum": "1"
  },
  "[hp_M]": {
    "value": 1,
    "ucum": "1"
  },
  "[hp_Q]": {
    "value": 1,
    "ucum": "1"
  },
  "[kp_X]": {
    "value": 1,
    "ucum": "1"
  },
  "[kp_C]": {
    "value": 1,
    "ucum": "1"
  },
  "[kp_M]": {
    "value": 1,
    "ucum": "1"
  },
  "[kp_Q]": {
    "value": 1,
    "ucum": "1"
  },
  "eq": {
    "value": 1,
    "ucum": "mol"
  },
  "osm": {
    "value": 1,
    "ucum": "mol"
  },
  "[pH]": {
    "ucum": "pH(1 mol/l)"
  },
  "g%": {
    "value": 1,
    "ucum": "g/dl"
  },
  "[S]": {
    "value": 1,
    "ucum": "10*-13.s"
  },
  "[HPF]": {
    "value": 1,
    "ucum": "1"
  },
  "[LPF]": {
    "value": 100,
    "ucum": "1"
  },
  "kat": {
    "value": 1,
    "ucum": "mol/s"
  },
  "U": {
    "value": 1,
    "ucum": "umol/min"
  },
  "[iU]": {
    "value": 1,
    "ucum": "1"
  },
  "[IU]": {
    "value": 1,
    "ucum": "[iU]"
  },
  "[arb'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[USP'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[GPL'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[MPL'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[APL'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[beth'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[anti'Xa'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[todd'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[dye'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[smgy'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[bdsk'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[ka'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[knk'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[mclg'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[tb'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[CCID_50]": {
    "value": 1,
    "ucum": "1"
  },
  "[TCID_50]": {
    "value": 1,
    "ucum": "1"
  },
  "[EID_50]": {
    "value": 1,
    "ucum": "1"
  },
  "[PFU]": {
    "value": 1,
    "ucum": "1"
  },
  "[FFU]": {
    "value": 1,
    "ucum": "1"
  },
  "[CFU]": {
    "value": 1,
    "ucum": "1"
  },
  "[BAU]": {
    "value": 1,
    "ucum": "1"
  },
  "[AU]": {
    "value": 1,
    "ucum": "1"
  },
  "[Amb'a'1'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[PNU]": {
    "value": 1,
    "ucum": "1"
  },
  "[Lf]": {
    "value": 1,
    "ucum": "1"
  },
  "[D'ag'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[FEU]": {
    "value": 1,
    "ucum": "1"
  },
  "[ELU]": {
    "value": 1,
    "ucum": "1"
  },
  "[EU]": {
    "value": 1,
    "ucum": "1"
  },
  "Np": {
    "ucum": "ln(1 1)"
  },
  "B": {
    "ucum": "lg(1 1)"
  },
  "B[SPL]": {
    "ucum": "2lg(2 10*-5.Pa)"
  },
  "B[V]": {
    "ucum": "2lg(1 V)"
  },
  "B[mV]": {
    "ucum": "2lg(1 mV)"
  },
  "B[uV]": {
    "ucum": "2lg(1 uV)"
  },
  "B[10.nV]": {
    "ucum": "2lg(10 nV)"
  },
  "B[W]": {
    "ucum": "lg(1 W)"
  },
  "B[kW]": {
    "ucum": "lg(1 kW)"
  },
  "st": {
    "value": 1,
    "ucum": "m3"
  },
  "Ao": {
    "value": 0.1,
    "ucum": "nm"
  },
  "b": {
    "value": 100,
    "ucum": "fm2"
  },
  "att": {
    "value": 1,
    "ucum": "kgf/cm2"
  },
  "mho": {
    "value": 1,
    "ucum": "S"
  },
  "[psi]": {
    "value": 1,
    "ucum": "[lbf_av]/[in_i]2"
  },
  "circ": {
    "value": 2,
    "ucum": "[pi].rad"
  },
  "sph": {
    "value": 4,
    "ucum": "[pi].sr"
  },
  "[car_m]": {
    "value": 0.2,
    "ucum": "g"
  },
  "[car_Au]": {
    "value": 1,
    "ucum": "/24"
  },
  "[smoot]": {
    "value": 67,
    "ucum": "[in_i]"
  },
  "bit_s": {
    "ucum": "ld(1 1)"
  },
  "bit": {
    "value": 1,
    "ucum": "1"
  },
  "By": {
    "value": 8,
    "ucum": "bit"
  },
  "Bd": {
    "value": 1,
    "ucum": "/s"
  }
}

},{}],2:[function(require,module,exports){
module.exports={
  "Y": 1e+24,
  "Z": 1e+21,
  "E": 1000000000000000000,
  "P": 1000000000000000,
  "T": 1000000000000,
  "G": 1000000000,
  "M": 1000000,
  "k": 1000,
  "h": 100,
  "da": 10,
  "d": 0.1,
  "c": 0.01,
  "m": 0.001,
  "u": 0.000001,
  "n": 1e-9,
  "p": 1e-12,
  "f": 1e-15,
  "a": 1e-18,
  "z": 1e-21,
  "y": 1.0000000000000001e-24,
  "Ki": 1024,
  "Mi": 1048576,
  "Gi": 1073741824,
  "Ti": 1099511627776
}

},{}],3:[function(require,module,exports){
module.exports = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleIndices = { start: 0 },
        peg$startRuleIndex   = 0,

        peg$consts = [
          function(e) {
            return e ; // cleanup(e);
          },
          peg$FAILED,
          "/",
          { type: "literal", value: "/", description: "\"/\"" },
          function(e) {return multiply({value:1, units:{}}, [["/", e]]);},
          ".",
          { type: "literal", value: ".", description: "\".\"" },
          [],
          function(t, ms) {
            return multiply(t, ms);
          },
          null,
          function(e, exp) {
            return topower(e, exp);
          },
          "(",
          { type: "literal", value: "(", description: "\"(\"" },
          ")",
          { type: "literal", value: ")", description: "\")\"" },
          function(e) {return e;},
          /^[+\-]/,
          { type: "class", value: "[+\\-]", description: "[+\\-]" },
          function(s, d) {return (s=="-") ? (-1*d) : d},
          function(a) {
           var ret = {
              value: 1,
              units: {}
            };
            ret.units[a] =  1;
            return ret;
          },
          function(p, a) {
            var ret = {
              value: prefixes[p],
              units: {}
            };
            ret.units[a] =  1;
            return ret;
          },
          function(d) {
           var ret = {
              value: d,
              units: {}
            };
            return ret;
          },
          /^[0-9]/,
          { type: "class", value: "[0-9]", description: "[0-9]" },
          "e",
          { type: "literal", value: "e", description: "\"e\"" },
          function(v, e) {
            return parseInt(v.join(""))*Math.pow(10, e||0);
          },
          "{",
          { type: "literal", value: "{", description: "\"{\"" },
          /^[^}]/,
          { type: "class", value: "[^}]", description: "[^}]" },
          "}",
          { type: "literal", value: "}", description: "\"}\"" },
          function(m) { return "{"+m.join("")+"}" },
          "10*",
          { type: "literal", value: "10*", description: "\"10*\"" },
          "10^",
          { type: "literal", value: "10^", description: "\"10^\"" },
          "[pi]",
          { type: "literal", value: "[pi]", description: "\"[pi]\"" },
          "%",
          { type: "literal", value: "%", description: "\"%\"" },
          "[ppth]",
          { type: "literal", value: "[ppth]", description: "\"[ppth]\"" },
          "[ppm]",
          { type: "literal", value: "[ppm]", description: "\"[ppm]\"" },
          "[ppb]",
          { type: "literal", value: "[ppb]", description: "\"[ppb]\"" },
          "[pptr]",
          { type: "literal", value: "[pptr]", description: "\"[pptr]\"" },
          "gon",
          { type: "literal", value: "gon", description: "\"gon\"" },
          "deg",
          { type: "literal", value: "deg", description: "\"deg\"" },
          "'",
          { type: "literal", value: "'", description: "\"'\"" },
          "''",
          { type: "literal", value: "''", description: "\"''\"" },
          "min",
          { type: "literal", value: "min", description: "\"min\"" },
          "h",
          { type: "literal", value: "h", description: "\"h\"" },
          "d",
          { type: "literal", value: "d", description: "\"d\"" },
          "a_t",
          { type: "literal", value: "a_t", description: "\"a_t\"" },
          "a_j",
          { type: "literal", value: "a_j", description: "\"a_j\"" },
          "a_g",
          { type: "literal", value: "a_g", description: "\"a_g\"" },
          "a",
          { type: "literal", value: "a", description: "\"a\"" },
          "wk",
          { type: "literal", value: "wk", description: "\"wk\"" },
          "mo_s",
          { type: "literal", value: "mo_s", description: "\"mo_s\"" },
          "mo_j",
          { type: "literal", value: "mo_j", description: "\"mo_j\"" },
          "mo_g",
          { type: "literal", value: "mo_g", description: "\"mo_g\"" },
          "mo",
          { type: "literal", value: "mo", description: "\"mo\"" },
          "AU",
          { type: "literal", value: "AU", description: "\"AU\"" },
          "atm",
          { type: "literal", value: "atm", description: "\"atm\"" },
          "[lbf_av]",
          { type: "literal", value: "[lbf_av]", description: "\"[lbf_av]\"" },
          "[in_i]",
          { type: "literal", value: "[in_i]", description: "\"[in_i]\"" },
          "[ft_i]",
          { type: "literal", value: "[ft_i]", description: "\"[ft_i]\"" },
          "[yd_i]",
          { type: "literal", value: "[yd_i]", description: "\"[yd_i]\"" },
          "[mi_i]",
          { type: "literal", value: "[mi_i]", description: "\"[mi_i]\"" },
          "[fth_i]",
          { type: "literal", value: "[fth_i]", description: "\"[fth_i]\"" },
          "[nmi_i]",
          { type: "literal", value: "[nmi_i]", description: "\"[nmi_i]\"" },
          "[kn_i]",
          { type: "literal", value: "[kn_i]", description: "\"[kn_i]\"" },
          "[sin_i]",
          { type: "literal", value: "[sin_i]", description: "\"[sin_i]\"" },
          "[sft_i]",
          { type: "literal", value: "[sft_i]", description: "\"[sft_i]\"" },
          "[syd_i]",
          { type: "literal", value: "[syd_i]", description: "\"[syd_i]\"" },
          "[cin_i]",
          { type: "literal", value: "[cin_i]", description: "\"[cin_i]\"" },
          "[cft_i]",
          { type: "literal", value: "[cft_i]", description: "\"[cft_i]\"" },
          "[cyd_i]",
          { type: "literal", value: "[cyd_i]", description: "\"[cyd_i]\"" },
          "[bf_i]",
          { type: "literal", value: "[bf_i]", description: "\"[bf_i]\"" },
          "[cr_i]",
          { type: "literal", value: "[cr_i]", description: "\"[cr_i]\"" },
          "[mil_i]",
          { type: "literal", value: "[mil_i]", description: "\"[mil_i]\"" },
          "[cml_i]",
          { type: "literal", value: "[cml_i]", description: "\"[cml_i]\"" },
          "[hd_i]",
          { type: "literal", value: "[hd_i]", description: "\"[hd_i]\"" },
          "[ft_us]",
          { type: "literal", value: "[ft_us]", description: "\"[ft_us]\"" },
          "[yd_us]",
          { type: "literal", value: "[yd_us]", description: "\"[yd_us]\"" },
          "[in_us]",
          { type: "literal", value: "[in_us]", description: "\"[in_us]\"" },
          "[rd_us]",
          { type: "literal", value: "[rd_us]", description: "\"[rd_us]\"" },
          "[ch_us]",
          { type: "literal", value: "[ch_us]", description: "\"[ch_us]\"" },
          "[lk_us]",
          { type: "literal", value: "[lk_us]", description: "\"[lk_us]\"" },
          "[rch_us]",
          { type: "literal", value: "[rch_us]", description: "\"[rch_us]\"" },
          "[rlk_us]",
          { type: "literal", value: "[rlk_us]", description: "\"[rlk_us]\"" },
          "[fth_us]",
          { type: "literal", value: "[fth_us]", description: "\"[fth_us]\"" },
          "[fur_us]",
          { type: "literal", value: "[fur_us]", description: "\"[fur_us]\"" },
          "[mi_us]",
          { type: "literal", value: "[mi_us]", description: "\"[mi_us]\"" },
          "[acr_us]",
          { type: "literal", value: "[acr_us]", description: "\"[acr_us]\"" },
          "[srd_us]",
          { type: "literal", value: "[srd_us]", description: "\"[srd_us]\"" },
          "[smi_us]",
          { type: "literal", value: "[smi_us]", description: "\"[smi_us]\"" },
          "[sct]",
          { type: "literal", value: "[sct]", description: "\"[sct]\"" },
          "[twp]",
          { type: "literal", value: "[twp]", description: "\"[twp]\"" },
          "[mil_us]",
          { type: "literal", value: "[mil_us]", description: "\"[mil_us]\"" },
          "[in_br]",
          { type: "literal", value: "[in_br]", description: "\"[in_br]\"" },
          "[ft_br]",
          { type: "literal", value: "[ft_br]", description: "\"[ft_br]\"" },
          "[rd_br]",
          { type: "literal", value: "[rd_br]", description: "\"[rd_br]\"" },
          "[ch_br]",
          { type: "literal", value: "[ch_br]", description: "\"[ch_br]\"" },
          "[lk_br]",
          { type: "literal", value: "[lk_br]", description: "\"[lk_br]\"" },
          "[fth_br]",
          { type: "literal", value: "[fth_br]", description: "\"[fth_br]\"" },
          "[pc_br]",
          { type: "literal", value: "[pc_br]", description: "\"[pc_br]\"" },
          "[yd_br]",
          { type: "literal", value: "[yd_br]", description: "\"[yd_br]\"" },
          "[mi_br]",
          { type: "literal", value: "[mi_br]", description: "\"[mi_br]\"" },
          "[nmi_br]",
          { type: "literal", value: "[nmi_br]", description: "\"[nmi_br]\"" },
          "[kn_br]",
          { type: "literal", value: "[kn_br]", description: "\"[kn_br]\"" },
          "[acr_br]",
          { type: "literal", value: "[acr_br]", description: "\"[acr_br]\"" },
          "[gal_us]",
          { type: "literal", value: "[gal_us]", description: "\"[gal_us]\"" },
          "[bbl_us]",
          { type: "literal", value: "[bbl_us]", description: "\"[bbl_us]\"" },
          "[qt_us]",
          { type: "literal", value: "[qt_us]", description: "\"[qt_us]\"" },
          "[pt_us]",
          { type: "literal", value: "[pt_us]", description: "\"[pt_us]\"" },
          "[gil_us]",
          { type: "literal", value: "[gil_us]", description: "\"[gil_us]\"" },
          "[foz_us]",
          { type: "literal", value: "[foz_us]", description: "\"[foz_us]\"" },
          "[fdr_us]",
          { type: "literal", value: "[fdr_us]", description: "\"[fdr_us]\"" },
          "[min_us]",
          { type: "literal", value: "[min_us]", description: "\"[min_us]\"" },
          "[crd_us]",
          { type: "literal", value: "[crd_us]", description: "\"[crd_us]\"" },
          "[bu_us]",
          { type: "literal", value: "[bu_us]", description: "\"[bu_us]\"" },
          "[gal_wi]",
          { type: "literal", value: "[gal_wi]", description: "\"[gal_wi]\"" },
          "[pk_us]",
          { type: "literal", value: "[pk_us]", description: "\"[pk_us]\"" },
          "[dqt_us]",
          { type: "literal", value: "[dqt_us]", description: "\"[dqt_us]\"" },
          "[dpt_us]",
          { type: "literal", value: "[dpt_us]", description: "\"[dpt_us]\"" },
          "[tbs_us]",
          { type: "literal", value: "[tbs_us]", description: "\"[tbs_us]\"" },
          "[tsp_us]",
          { type: "literal", value: "[tsp_us]", description: "\"[tsp_us]\"" },
          "[cup_us]",
          { type: "literal", value: "[cup_us]", description: "\"[cup_us]\"" },
          "[foz_m]",
          { type: "literal", value: "[foz_m]", description: "\"[foz_m]\"" },
          "[cup_m]",
          { type: "literal", value: "[cup_m]", description: "\"[cup_m]\"" },
          "[tsp_m]",
          { type: "literal", value: "[tsp_m]", description: "\"[tsp_m]\"" },
          "[tbs_m]",
          { type: "literal", value: "[tbs_m]", description: "\"[tbs_m]\"" },
          "[gal_br]",
          { type: "literal", value: "[gal_br]", description: "\"[gal_br]\"" },
          "[pk_br]",
          { type: "literal", value: "[pk_br]", description: "\"[pk_br]\"" },
          "[bu_br]",
          { type: "literal", value: "[bu_br]", description: "\"[bu_br]\"" },
          "[qt_br]",
          { type: "literal", value: "[qt_br]", description: "\"[qt_br]\"" },
          "[pt_br]",
          { type: "literal", value: "[pt_br]", description: "\"[pt_br]\"" },
          "[gil_br]",
          { type: "literal", value: "[gil_br]", description: "\"[gil_br]\"" },
          "[foz_br]",
          { type: "literal", value: "[foz_br]", description: "\"[foz_br]\"" },
          "[fdr_br]",
          { type: "literal", value: "[fdr_br]", description: "\"[fdr_br]\"" },
          "[min_br]",
          { type: "literal", value: "[min_br]", description: "\"[min_br]\"" },
          "[gr]",
          { type: "literal", value: "[gr]", description: "\"[gr]\"" },
          "[lb_av]",
          { type: "literal", value: "[lb_av]", description: "\"[lb_av]\"" },
          "[oz_av]",
          { type: "literal", value: "[oz_av]", description: "\"[oz_av]\"" },
          "[dr_av]",
          { type: "literal", value: "[dr_av]", description: "\"[dr_av]\"" },
          "[scwt_av]",
          { type: "literal", value: "[scwt_av]", description: "\"[scwt_av]\"" },
          "[lcwt_av]",
          { type: "literal", value: "[lcwt_av]", description: "\"[lcwt_av]\"" },
          "[ston_av]",
          { type: "literal", value: "[ston_av]", description: "\"[ston_av]\"" },
          "[lton_av]",
          { type: "literal", value: "[lton_av]", description: "\"[lton_av]\"" },
          "[stone_av]",
          { type: "literal", value: "[stone_av]", description: "\"[stone_av]\"" },
          "[pwt_tr]",
          { type: "literal", value: "[pwt_tr]", description: "\"[pwt_tr]\"" },
          "[oz_tr]",
          { type: "literal", value: "[oz_tr]", description: "\"[oz_tr]\"" },
          "[lb_tr]",
          { type: "literal", value: "[lb_tr]", description: "\"[lb_tr]\"" },
          "[sc_ap]",
          { type: "literal", value: "[sc_ap]", description: "\"[sc_ap]\"" },
          "[dr_ap]",
          { type: "literal", value: "[dr_ap]", description: "\"[dr_ap]\"" },
          "[oz_ap]",
          { type: "literal", value: "[oz_ap]", description: "\"[oz_ap]\"" },
          "[lb_ap]",
          { type: "literal", value: "[lb_ap]", description: "\"[lb_ap]\"" },
          "[oz_m]",
          { type: "literal", value: "[oz_m]", description: "\"[oz_m]\"" },
          "[lne]",
          { type: "literal", value: "[lne]", description: "\"[lne]\"" },
          "[pnt]",
          { type: "literal", value: "[pnt]", description: "\"[pnt]\"" },
          "[pca]",
          { type: "literal", value: "[pca]", description: "\"[pca]\"" },
          "[pnt_pr]",
          { type: "literal", value: "[pnt_pr]", description: "\"[pnt_pr]\"" },
          "[pca_pr]",
          { type: "literal", value: "[pca_pr]", description: "\"[pca_pr]\"" },
          "[pied]",
          { type: "literal", value: "[pied]", description: "\"[pied]\"" },
          "[pouce]",
          { type: "literal", value: "[pouce]", description: "\"[pouce]\"" },
          "[ligne]",
          { type: "literal", value: "[ligne]", description: "\"[ligne]\"" },
          "[didot]",
          { type: "literal", value: "[didot]", description: "\"[didot]\"" },
          "[cicero]",
          { type: "literal", value: "[cicero]", description: "\"[cicero]\"" },
          "[degF]",
          { type: "literal", value: "[degF]", description: "\"[degF]\"" },
          "[degR]",
          { type: "literal", value: "[degR]", description: "\"[degR]\"" },
          "[Cal]",
          { type: "literal", value: "[Cal]", description: "\"[Cal]\"" },
          "[Btu_39]",
          { type: "literal", value: "[Btu_39]", description: "\"[Btu_39]\"" },
          "[Btu_59]",
          { type: "literal", value: "[Btu_59]", description: "\"[Btu_59]\"" },
          "[Btu_60]",
          { type: "literal", value: "[Btu_60]", description: "\"[Btu_60]\"" },
          "[Btu_m]",
          { type: "literal", value: "[Btu_m]", description: "\"[Btu_m]\"" },
          "[Btu_IT]",
          { type: "literal", value: "[Btu_IT]", description: "\"[Btu_IT]\"" },
          "[Btu_th]",
          { type: "literal", value: "[Btu_th]", description: "\"[Btu_th]\"" },
          "[Btu]",
          { type: "literal", value: "[Btu]", description: "\"[Btu]\"" },
          "[HP]",
          { type: "literal", value: "[HP]", description: "\"[HP]\"" },
          "[den]",
          { type: "literal", value: "[den]", description: "\"[den]\"" },
          "[in_i'H2O]",
          { type: "literal", value: "[in_i'H2O]", description: "\"[in_i'H2O]\"" },
          "[in_i'Hg]",
          { type: "literal", value: "[in_i'Hg]", description: "\"[in_i'Hg]\"" },
          "[PRU]",
          { type: "literal", value: "[PRU]", description: "\"[PRU]\"" },
          "[wood'U]",
          { type: "literal", value: "[wood'U]", description: "\"[wood'U]\"" },
          "[diop]",
          { type: "literal", value: "[diop]", description: "\"[diop]\"" },
          "[p'diop]",
          { type: "literal", value: "[p'diop]", description: "\"[p'diop]\"" },
          "%[slope]",
          { type: "literal", value: "%[slope]", description: "\"%[slope]\"" },
          "[mesh_i]",
          { type: "literal", value: "[mesh_i]", description: "\"[mesh_i]\"" },
          "[Ch]",
          { type: "literal", value: "[Ch]", description: "\"[Ch]\"" },
          "[drp]",
          { type: "literal", value: "[drp]", description: "\"[drp]\"" },
          "[hnsf'U]",
          { type: "literal", value: "[hnsf'U]", description: "\"[hnsf'U]\"" },
          "[MET]",
          { type: "literal", value: "[MET]", description: "\"[MET]\"" },
          "[hp'_X]",
          { type: "literal", value: "[hp'_X]", description: "\"[hp'_X]\"" },
          "[hp'_C]",
          { type: "literal", value: "[hp'_C]", description: "\"[hp'_C]\"" },
          "[hp'_M]",
          { type: "literal", value: "[hp'_M]", description: "\"[hp'_M]\"" },
          "[hp'_Q]",
          { type: "literal", value: "[hp'_Q]", description: "\"[hp'_Q]\"" },
          "[hp_X]",
          { type: "literal", value: "[hp_X]", description: "\"[hp_X]\"" },
          "[hp_C]",
          { type: "literal", value: "[hp_C]", description: "\"[hp_C]\"" },
          "[hp_M]",
          { type: "literal", value: "[hp_M]", description: "\"[hp_M]\"" },
          "[hp_Q]",
          { type: "literal", value: "[hp_Q]", description: "\"[hp_Q]\"" },
          "[kp_X]",
          { type: "literal", value: "[kp_X]", description: "\"[kp_X]\"" },
          "[kp_C]",
          { type: "literal", value: "[kp_C]", description: "\"[kp_C]\"" },
          "[kp_M]",
          { type: "literal", value: "[kp_M]", description: "\"[kp_M]\"" },
          "[kp_Q]",
          { type: "literal", value: "[kp_Q]", description: "\"[kp_Q]\"" },
          "[pH]",
          { type: "literal", value: "[pH]", description: "\"[pH]\"" },
          "[S]",
          { type: "literal", value: "[S]", description: "\"[S]\"" },
          "[HPF]",
          { type: "literal", value: "[HPF]", description: "\"[HPF]\"" },
          "[LPF]",
          { type: "literal", value: "[LPF]", description: "\"[LPF]\"" },
          "[arb'U]",
          { type: "literal", value: "[arb'U]", description: "\"[arb'U]\"" },
          "[USP'U]",
          { type: "literal", value: "[USP'U]", description: "\"[USP'U]\"" },
          "[GPL'U]",
          { type: "literal", value: "[GPL'U]", description: "\"[GPL'U]\"" },
          "[MPL'U]",
          { type: "literal", value: "[MPL'U]", description: "\"[MPL'U]\"" },
          "[APL'U]",
          { type: "literal", value: "[APL'U]", description: "\"[APL'U]\"" },
          "[beth'U]",
          { type: "literal", value: "[beth'U]", description: "\"[beth'U]\"" },
          "[anti'Xa'U]",
          { type: "literal", value: "[anti'Xa'U]", description: "\"[anti'Xa'U]\"" },
          "[todd'U]",
          { type: "literal", value: "[todd'U]", description: "\"[todd'U]\"" },
          "[dye'U]",
          { type: "literal", value: "[dye'U]", description: "\"[dye'U]\"" },
          "[smgy'U]",
          { type: "literal", value: "[smgy'U]", description: "\"[smgy'U]\"" },
          "[bdsk'U]",
          { type: "literal", value: "[bdsk'U]", description: "\"[bdsk'U]\"" },
          "[ka'U]",
          { type: "literal", value: "[ka'U]", description: "\"[ka'U]\"" },
          "[knk'U]",
          { type: "literal", value: "[knk'U]", description: "\"[knk'U]\"" },
          "[mclg'U]",
          { type: "literal", value: "[mclg'U]", description: "\"[mclg'U]\"" },
          "[tb'U]",
          { type: "literal", value: "[tb'U]", description: "\"[tb'U]\"" },
          "[CCID_50]",
          { type: "literal", value: "[CCID_50]", description: "\"[CCID_50]\"" },
          "[TCID_50]",
          { type: "literal", value: "[TCID_50]", description: "\"[TCID_50]\"" },
          "[EID_50]",
          { type: "literal", value: "[EID_50]", description: "\"[EID_50]\"" },
          "[PFU]",
          { type: "literal", value: "[PFU]", description: "\"[PFU]\"" },
          "[FFU]",
          { type: "literal", value: "[FFU]", description: "\"[FFU]\"" },
          "[CFU]",
          { type: "literal", value: "[CFU]", description: "\"[CFU]\"" },
          "[BAU]",
          { type: "literal", value: "[BAU]", description: "\"[BAU]\"" },
          "[AU]",
          { type: "literal", value: "[AU]", description: "\"[AU]\"" },
          "[Amb'a'1'U]",
          { type: "literal", value: "[Amb'a'1'U]", description: "\"[Amb'a'1'U]\"" },
          "[PNU]",
          { type: "literal", value: "[PNU]", description: "\"[PNU]\"" },
          "[Lf]",
          { type: "literal", value: "[Lf]", description: "\"[Lf]\"" },
          "[D'ag'U]",
          { type: "literal", value: "[D'ag'U]", description: "\"[D'ag'U]\"" },
          "[FEU]",
          { type: "literal", value: "[FEU]", description: "\"[FEU]\"" },
          "[ELU]",
          { type: "literal", value: "[ELU]", description: "\"[ELU]\"" },
          "[EU]",
          { type: "literal", value: "[EU]", description: "\"[EU]\"" },
          "Ao",
          { type: "literal", value: "Ao", description: "\"Ao\"" },
          "b",
          { type: "literal", value: "b", description: "\"b\"" },
          "att",
          { type: "literal", value: "att", description: "\"att\"" },
          "[psi]",
          { type: "literal", value: "[psi]", description: "\"[psi]\"" },
          "circ",
          { type: "literal", value: "circ", description: "\"circ\"" },
          "sph",
          { type: "literal", value: "sph", description: "\"sph\"" },
          "[car_m]",
          { type: "literal", value: "[car_m]", description: "\"[car_m]\"" },
          "[car_Au]",
          { type: "literal", value: "[car_Au]", description: "\"[car_Au]\"" },
          "[smoot]",
          { type: "literal", value: "[smoot]", description: "\"[smoot]\"" },
          "bit_s",
          { type: "literal", value: "bit_s", description: "\"bit_s\"" },
          "mol",
          { type: "literal", value: "mol", description: "\"mol\"" },
          "sr",
          { type: "literal", value: "sr", description: "\"sr\"" },
          "Hz",
          { type: "literal", value: "Hz", description: "\"Hz\"" },
          "N",
          { type: "literal", value: "N", description: "\"N\"" },
          "Pa",
          { type: "literal", value: "Pa", description: "\"Pa\"" },
          "J",
          { type: "literal", value: "J", description: "\"J\"" },
          "W",
          { type: "literal", value: "W", description: "\"W\"" },
          "A",
          { type: "literal", value: "A", description: "\"A\"" },
          "V",
          { type: "literal", value: "V", description: "\"V\"" },
          "F",
          { type: "literal", value: "F", description: "\"F\"" },
          "Ohm",
          { type: "literal", value: "Ohm", description: "\"Ohm\"" },
          "S",
          { type: "literal", value: "S", description: "\"S\"" },
          "Wb",
          { type: "literal", value: "Wb", description: "\"Wb\"" },
          "Cel",
          { type: "literal", value: "Cel", description: "\"Cel\"" },
          "T",
          { type: "literal", value: "T", description: "\"T\"" },
          "H",
          { type: "literal", value: "H", description: "\"H\"" },
          "lm",
          { type: "literal", value: "lm", description: "\"lm\"" },
          "lx",
          { type: "literal", value: "lx", description: "\"lx\"" },
          "Bq",
          { type: "literal", value: "Bq", description: "\"Bq\"" },
          "Gy",
          { type: "literal", value: "Gy", description: "\"Gy\"" },
          "Sv",
          { type: "literal", value: "Sv", description: "\"Sv\"" },
          "l",
          { type: "literal", value: "l", description: "\"l\"" },
          "L",
          { type: "literal", value: "L", description: "\"L\"" },
          "ar",
          { type: "literal", value: "ar", description: "\"ar\"" },
          "t",
          { type: "literal", value: "t", description: "\"t\"" },
          "bar",
          { type: "literal", value: "bar", description: "\"bar\"" },
          "u",
          { type: "literal", value: "u", description: "\"u\"" },
          "eV",
          { type: "literal", value: "eV", description: "\"eV\"" },
          "pc",
          { type: "literal", value: "pc", description: "\"pc\"" },
          "[c]",
          { type: "literal", value: "[c]", description: "\"[c]\"" },
          "[h]",
          { type: "literal", value: "[h]", description: "\"[h]\"" },
          "[k]",
          { type: "literal", value: "[k]", description: "\"[k]\"" },
          "[eps_0]",
          { type: "literal", value: "[eps_0]", description: "\"[eps_0]\"" },
          "[mu_0]",
          { type: "literal", value: "[mu_0]", description: "\"[mu_0]\"" },
          "[e]",
          { type: "literal", value: "[e]", description: "\"[e]\"" },
          "[m_e]",
          { type: "literal", value: "[m_e]", description: "\"[m_e]\"" },
          "[m_p]",
          { type: "literal", value: "[m_p]", description: "\"[m_p]\"" },
          "[G]",
          { type: "literal", value: "[G]", description: "\"[G]\"" },
          "[g]",
          { type: "literal", value: "[g]", description: "\"[g]\"" },
          "[ly]",
          { type: "literal", value: "[ly]", description: "\"[ly]\"" },
          "gf",
          { type: "literal", value: "gf", description: "\"gf\"" },
          "Ky",
          { type: "literal", value: "Ky", description: "\"Ky\"" },
          "Gal",
          { type: "literal", value: "Gal", description: "\"Gal\"" },
          "dyn",
          { type: "literal", value: "dyn", description: "\"dyn\"" },
          "erg",
          { type: "literal", value: "erg", description: "\"erg\"" },
          "P",
          { type: "literal", value: "P", description: "\"P\"" },
          "Bi",
          { type: "literal", value: "Bi", description: "\"Bi\"" },
          "St",
          { type: "literal", value: "St", description: "\"St\"" },
          "Mx",
          { type: "literal", value: "Mx", description: "\"Mx\"" },
          "G",
          { type: "literal", value: "G", description: "\"G\"" },
          "Oe",
          { type: "literal", value: "Oe", description: "\"Oe\"" },
          "Gb",
          { type: "literal", value: "Gb", description: "\"Gb\"" },
          "sb",
          { type: "literal", value: "sb", description: "\"sb\"" },
          "Lmb",
          { type: "literal", value: "Lmb", description: "\"Lmb\"" },
          "ph",
          { type: "literal", value: "ph", description: "\"ph\"" },
          "Ci",
          { type: "literal", value: "Ci", description: "\"Ci\"" },
          "R",
          { type: "literal", value: "R", description: "\"R\"" },
          "RAD",
          { type: "literal", value: "RAD", description: "\"RAD\"" },
          "REM",
          { type: "literal", value: "REM", description: "\"REM\"" },
          "cal_[15]",
          { type: "literal", value: "cal_[15]", description: "\"cal_[15]\"" },
          "cal_[20]",
          { type: "literal", value: "cal_[20]", description: "\"cal_[20]\"" },
          "cal_m",
          { type: "literal", value: "cal_m", description: "\"cal_m\"" },
          "cal_IT",
          { type: "literal", value: "cal_IT", description: "\"cal_IT\"" },
          "cal_th",
          { type: "literal", value: "cal_th", description: "\"cal_th\"" },
          "cal",
          { type: "literal", value: "cal", description: "\"cal\"" },
          "tex",
          { type: "literal", value: "tex", description: "\"tex\"" },
          "m[H2O]",
          { type: "literal", value: "m[H2O]", description: "\"m[H2O]\"" },
          "m[Hg]",
          { type: "literal", value: "m[Hg]", description: "\"m[Hg]\"" },
          "eq",
          { type: "literal", value: "eq", description: "\"eq\"" },
          "osm",
          { type: "literal", value: "osm", description: "\"osm\"" },
          "g%",
          { type: "literal", value: "g%", description: "\"g%\"" },
          "kat",
          { type: "literal", value: "kat", description: "\"kat\"" },
          "U",
          { type: "literal", value: "U", description: "\"U\"" },
          "[iU]",
          { type: "literal", value: "[iU]", description: "\"[iU]\"" },
          "[IU]",
          { type: "literal", value: "[IU]", description: "\"[IU]\"" },
          "Np",
          { type: "literal", value: "Np", description: "\"Np\"" },
          "B",
          { type: "literal", value: "B", description: "\"B\"" },
          "B[SPL]",
          { type: "literal", value: "B[SPL]", description: "\"B[SPL]\"" },
          "B[V]",
          { type: "literal", value: "B[V]", description: "\"B[V]\"" },
          "B[mV]",
          { type: "literal", value: "B[mV]", description: "\"B[mV]\"" },
          "B[uV]",
          { type: "literal", value: "B[uV]", description: "\"B[uV]\"" },
          "B[10.nV]",
          { type: "literal", value: "B[10.nV]", description: "\"B[10.nV]\"" },
          "B[W]",
          { type: "literal", value: "B[W]", description: "\"B[W]\"" },
          "B[kW]",
          { type: "literal", value: "B[kW]", description: "\"B[kW]\"" },
          "st",
          { type: "literal", value: "st", description: "\"st\"" },
          "mho",
          { type: "literal", value: "mho", description: "\"mho\"" },
          "bit",
          { type: "literal", value: "bit", description: "\"bit\"" },
          "By",
          { type: "literal", value: "By", description: "\"By\"" },
          "Bd",
          { type: "literal", value: "Bd", description: "\"Bd\"" },
          "m",
          { type: "literal", value: "m", description: "\"m\"" },
          "s",
          { type: "literal", value: "s", description: "\"s\"" },
          "g",
          { type: "literal", value: "g", description: "\"g\"" },
          "rad",
          { type: "literal", value: "rad", description: "\"rad\"" },
          "K",
          { type: "literal", value: "K", description: "\"K\"" },
          "C",
          { type: "literal", value: "C", description: "\"C\"" },
          "cd",
          { type: "literal", value: "cd", description: "\"cd\"" },
          "Y",
          { type: "literal", value: "Y", description: "\"Y\"" },
          "Z",
          { type: "literal", value: "Z", description: "\"Z\"" },
          "E",
          { type: "literal", value: "E", description: "\"E\"" },
          "M",
          { type: "literal", value: "M", description: "\"M\"" },
          "k",
          { type: "literal", value: "k", description: "\"k\"" },
          "da",
          { type: "literal", value: "da", description: "\"da\"" },
          "c",
          { type: "literal", value: "c", description: "\"c\"" },
          "n",
          { type: "literal", value: "n", description: "\"n\"" },
          "p",
          { type: "literal", value: "p", description: "\"p\"" },
          "f",
          { type: "literal", value: "f", description: "\"f\"" },
          "z",
          { type: "literal", value: "z", description: "\"z\"" },
          "y",
          { type: "literal", value: "y", description: "\"y\"" },
          "Ki",
          { type: "literal", value: "Ki", description: "\"Ki\"" },
          "Mi",
          { type: "literal", value: "Mi", description: "\"Mi\"" },
          "Gi",
          { type: "literal", value: "Gi", description: "\"Gi\"" },
          "Ti",
          { type: "literal", value: "Ti", description: "\"Ti\"" }
        ],

        peg$bytecode = [
          peg$decode("!7!+' 4!6 !! %"),
          peg$decode("!.\"\"\"2\"3#+2$7#+(%4\"6$\"! %$\"# !\"# !*# \"7#"),
          peg$decode("!.%\"\"2%3&+-$7$+#%'\"%$\"# !\"# !*> \"!.\"\"\"2\"3#+-$7$+#%'\"%$\"# !\"# !"),
          peg$decode("!7$+;$ '7\",#&7\"\"+)%4\"6(\"\"! %$\"# !\"# !"),
          peg$decode("!7%+K$7&*# \" )+;% '7),#&7)\"+)%4#6*#\"\"!%$## !$\"# !\"# !"),
          peg$decode("7'*Y \"!.+\"\"2+3,+B$7#+8%.-\"\"2-3.+(%4#6/#!!%$## !$\"# !\"# !*# \"7)"),
          peg$decode("!00\"\"1!31*# \" )+3$7(+)%4\"62\"\"! %$\"# !\"# !"),
          peg$decode("!7*+' 4!63!! %*b \"!7,+3$7++)%4\"64\"\"! %$\"# !\"# !*A \"!7++' 4!63!! %*/ \"!7(+' 4!65!! %"),
          peg$decode("! '06\"\"1!37+,$,)&06\"\"1!37\"\"\" !+O$.8\"\"2839*# \" )+9%7&*# \" )+)%4#6:#\"\" %$## !$\"# !\"# !"),
          peg$decode("!.;\"\"2;3<+]$ '0=\"\"1!3>+,$,)&0=\"\"1!3>\"\"\" !+8%.?\"\"2?3@+(%4#6A#!!%$## !$\"# !\"# !"),
          peg$decode(".B\"\"2B3C*\u09F5 \".D\"\"2D3E*\u09E9 \".F\"\"2F3G*\u09DD \".H\"\"2H3I*\u09D1 \".J\"\"2J3K*\u09C5 \".L\"\"2L3M*\u09B9 \".N\"\"2N3O*\u09AD \".P\"\"2P3Q*\u09A1 \".R\"\"2R3S*\u0995 \".T\"\"2T3U*\u0989 \".V\"\"2V3W*\u097D \".X\"\"2X3Y*\u0971 \".Z\"\"2Z3[*\u0965 \".\\\"\"2\\3]*\u0959 \".^\"\"2^3_*\u094D \".`\"\"2`3a*\u0941 \".b\"\"2b3c*\u0935 \".d\"\"2d3e*\u0929 \".f\"\"2f3g*\u091D \".h\"\"2h3i*\u0911 \".j\"\"2j3k*\u0905 \".l\"\"2l3m*\u08F9 \".n\"\"2n3o*\u08ED \".p\"\"2p3q*\u08E1 \".r\"\"2r3s*\u08D5 \".t\"\"2t3u*\u08C9 \".v\"\"2v3w*\u08BD \".x\"\"2x3y*\u08B1 \".z\"\"2z3{*\u08A5 \".|\"\"2|3}*\u0899 \".~\"\"2~3*\u088D \".\x80\"\"2\x803\x81*\u0881 \".\x82\"\"2\x823\x83*\u0875 \".\x84\"\"2\x843\x85*\u0869 \".\x86\"\"2\x863\x87*\u085D \".\x88\"\"2\x883\x89*\u0851 \".\x8A\"\"2\x8A3\x8B*\u0845 \".\x8C\"\"2\x8C3\x8D*\u0839 \".\x8E\"\"2\x8E3\x8F*\u082D \".\x90\"\"2\x903\x91*\u0821 \".\x92\"\"2\x923\x93*\u0815 \".\x94\"\"2\x943\x95*\u0809 \".\x96\"\"2\x963\x97*\u07FD \".\x98\"\"2\x983\x99*\u07F1 \".\x9A\"\"2\x9A3\x9B*\u07E5 \".\x9C\"\"2\x9C3\x9D*\u07D9 \".\x9E\"\"2\x9E3\x9F*\u07CD \".\xA0\"\"2\xA03\xA1*\u07C1 \".\xA2\"\"2\xA23\xA3*\u07B5 \".\xA4\"\"2\xA43\xA5*\u07A9 \".\xA6\"\"2\xA63\xA7*\u079D \".\xA8\"\"2\xA83\xA9*\u0791 \".\xAA\"\"2\xAA3\xAB*\u0785 \".\xAC\"\"2\xAC3\xAD*\u0779 \".\xAE\"\"2\xAE3\xAF*\u076D \".\xB0\"\"2\xB03\xB1*\u0761 \".\xB2\"\"2\xB23\xB3*\u0755 \".\xB4\"\"2\xB43\xB5*\u0749 \".\xB6\"\"2\xB63\xB7*\u073D \".\xB8\"\"2\xB83\xB9*\u0731 \".\xBA\"\"2\xBA3\xBB*\u0725 \".\xBC\"\"2\xBC3\xBD*\u0719 \".\xBE\"\"2\xBE3\xBF*\u070D \".\xC0\"\"2\xC03\xC1*\u0701 \".\xC2\"\"2\xC23\xC3*\u06F5 \".\xC4\"\"2\xC43\xC5*\u06E9 \".\xC6\"\"2\xC63\xC7*\u06DD \".\xC8\"\"2\xC83\xC9*\u06D1 \".\xCA\"\"2\xCA3\xCB*\u06C5 \".\xCC\"\"2\xCC3\xCD*\u06B9 \".\xCE\"\"2\xCE3\xCF*\u06AD \".\xD0\"\"2\xD03\xD1*\u06A1 \".\xD2\"\"2\xD23\xD3*\u0695 \".\xD4\"\"2\xD43\xD5*\u0689 \".\xD6\"\"2\xD63\xD7*\u067D \".\xD8\"\"2\xD83\xD9*\u0671 \".\xDA\"\"2\xDA3\xDB*\u0665 \".\xDC\"\"2\xDC3\xDD*\u0659 \".\xDE\"\"2\xDE3\xDF*\u064D \".\xE0\"\"2\xE03\xE1*\u0641 \".\xE2\"\"2\xE23\xE3*\u0635 \".\xE4\"\"2\xE43\xE5*\u0629 \".\xE6\"\"2\xE63\xE7*\u061D \".\xE8\"\"2\xE83\xE9*\u0611 \".\xEA\"\"2\xEA3\xEB*\u0605 \".\xEC\"\"2\xEC3\xED*\u05F9 \".\xEE\"\"2\xEE3\xEF*\u05ED \".\xF0\"\"2\xF03\xF1*\u05E1 \".\xF2\"\"2\xF23\xF3*\u05D5 \".\xF4\"\"2\xF43\xF5*\u05C9 \".\xF6\"\"2\xF63\xF7*\u05BD \".\xF8\"\"2\xF83\xF9*\u05B1 \".\xFA\"\"2\xFA3\xFB*\u05A5 \".\xFC\"\"2\xFC3\xFD*\u0599 \".\xFE\"\"2\xFE3\xFF*\u058D \".\u0100\"\"2\u01003\u0101*\u0581 \".\u0102\"\"2\u01023\u0103*\u0575 \".\u0104\"\"2\u01043\u0105*\u0569 \".\u0106\"\"2\u01063\u0107*\u055D \".\u0108\"\"2\u01083\u0109*\u0551 \".\u010A\"\"2\u010A3\u010B*\u0545 \".\u010C\"\"2\u010C3\u010D*\u0539 \".\u010E\"\"2\u010E3\u010F*\u052D \".\u0110\"\"2\u01103\u0111*\u0521 \".\u0112\"\"2\u01123\u0113*\u0515 \".\u0114\"\"2\u01143\u0115*\u0509 \".\u0116\"\"2\u01163\u0117*\u04FD \".\u0118\"\"2\u01183\u0119*\u04F1 \".\u011A\"\"2\u011A3\u011B*\u04E5 \".\u011C\"\"2\u011C3\u011D*\u04D9 \".\u011E\"\"2\u011E3\u011F*\u04CD \".\u0120\"\"2\u01203\u0121*\u04C1 \".\u0122\"\"2\u01223\u0123*\u04B5 \".\u0124\"\"2\u01243\u0125*\u04A9 \".\u0126\"\"2\u01263\u0127*\u049D \".\u0128\"\"2\u01283\u0129*\u0491 \".\u012A\"\"2\u012A3\u012B*\u0485 \".\u012C\"\"2\u012C3\u012D*\u0479 \".\u012E\"\"2\u012E3\u012F*\u046D \".\u0130\"\"2\u01303\u0131*\u0461 \".\u0132\"\"2\u01323\u0133*\u0455 \".\u0134\"\"2\u01343\u0135*\u0449 \".\u0136\"\"2\u01363\u0137*\u043D \".\u0138\"\"2\u01383\u0139*\u0431 \".\u013A\"\"2\u013A3\u013B*\u0425 \".\u013C\"\"2\u013C3\u013D*\u0419 \".\u013E\"\"2\u013E3\u013F*\u040D \".\u0140\"\"2\u01403\u0141*\u0401 \".\u0142\"\"2\u01423\u0143*\u03F5 \".\u0144\"\"2\u01443\u0145*\u03E9 \".\u0146\"\"2\u01463\u0147*\u03DD \".\u0148\"\"2\u01483\u0149*\u03D1 \".\u014A\"\"2\u014A3\u014B*\u03C5 \".\u014C\"\"2\u014C3\u014D*\u03B9 \".\u014E\"\"2\u014E3\u014F*\u03AD \".\u0150\"\"2\u01503\u0151*\u03A1 \".\u0152\"\"2\u01523\u0153*\u0395 \".\u0154\"\"2\u01543\u0155*\u0389 \".\u0156\"\"2\u01563\u0157*\u037D \".\u0158\"\"2\u01583\u0159*\u0371 \".\u015A\"\"2\u015A3\u015B*\u0365 \".\u015C\"\"2\u015C3\u015D*\u0359 \".\u015E\"\"2\u015E3\u015F*\u034D \".\u0160\"\"2\u01603\u0161*\u0341 \".\u0162\"\"2\u01623\u0163*\u0335 \".\u0164\"\"2\u01643\u0165*\u0329 \".\u0166\"\"2\u01663\u0167*\u031D \".\u0168\"\"2\u01683\u0169*\u0311 \".\u016A\"\"2\u016A3\u016B*\u0305 \".\u016C\"\"2\u016C3\u016D*\u02F9 \".\u016E\"\"2\u016E3\u016F*\u02ED \".\u0170\"\"2\u01703\u0171*\u02E1 \".\u0172\"\"2\u01723\u0173*\u02D5 \".\u0174\"\"2\u01743\u0175*\u02C9 \".\u0176\"\"2\u01763\u0177*\u02BD \".\u0178\"\"2\u01783\u0179*\u02B1 \".\u017A\"\"2\u017A3\u017B*\u02A5 \".\u017C\"\"2\u017C3\u017D*\u0299 \".\u017E\"\"2\u017E3\u017F*\u028D \".\u0180\"\"2\u01803\u0181*\u0281 \".\u0182\"\"2\u01823\u0183*\u0275 \".\u0184\"\"2\u01843\u0185*\u0269 \".\u0186\"\"2\u01863\u0187*\u025D \".\u0188\"\"2\u01883\u0189*\u0251 \".\u018A\"\"2\u018A3\u018B*\u0245 \".\u018C\"\"2\u018C3\u018D*\u0239 \".\u018E\"\"2\u018E3\u018F*\u022D \".\u0190\"\"2\u01903\u0191*\u0221 \".\u0192\"\"2\u01923\u0193*\u0215 \".\u0194\"\"2\u01943\u0195*\u0209 \".\u0196\"\"2\u01963\u0197*\u01FD \".\u0198\"\"2\u01983\u0199*\u01F1 \".\u019A\"\"2\u019A3\u019B*\u01E5 \".\u019C\"\"2\u019C3\u019D*\u01D9 \".\u019E\"\"2\u019E3\u019F*\u01CD \".\u01A0\"\"2\u01A03\u01A1*\u01C1 \".\u01A2\"\"2\u01A23\u01A3*\u01B5 \".\u01A4\"\"2\u01A43\u01A5*\u01A9 \".\u01A6\"\"2\u01A63\u01A7*\u019D \".\u01A8\"\"2\u01A83\u01A9*\u0191 \".\u01AA\"\"2\u01AA3\u01AB*\u0185 \".\u01AC\"\"2\u01AC3\u01AD*\u0179 \".\u01AE\"\"2\u01AE3\u01AF*\u016D \".\u01B0\"\"2\u01B03\u01B1*\u0161 \".\u01B2\"\"2\u01B23\u01B3*\u0155 \".\u01B4\"\"2\u01B43\u01B5*\u0149 \".\u01B6\"\"2\u01B63\u01B7*\u013D \".\u01B8\"\"2\u01B83\u01B9*\u0131 \".\u01BA\"\"2\u01BA3\u01BB*\u0125 \".\u01BC\"\"2\u01BC3\u01BD*\u0119 \".\u01BE\"\"2\u01BE3\u01BF*\u010D \".\u01C0\"\"2\u01C03\u01C1*\u0101 \".\u01C2\"\"2\u01C23\u01C3*\xF5 \".\u01C4\"\"2\u01C43\u01C5*\xE9 \".\u01C6\"\"2\u01C63\u01C7*\xDD \".\u01C8\"\"2\u01C83\u01C9*\xD1 \".\u01CA\"\"2\u01CA3\u01CB*\xC5 \".\u01CC\"\"2\u01CC3\u01CD*\xB9 \".\u01CE\"\"2\u01CE3\u01CF*\xAD \".\u01D0\"\"2\u01D03\u01D1*\xA1 \".\u01D2\"\"2\u01D23\u01D3*\x95 \".\u01D4\"\"2\u01D43\u01D5*\x89 \".\u01D6\"\"2\u01D63\u01D7*} \".\u01D8\"\"2\u01D83\u01D9*q \".\u01DA\"\"2\u01DA3\u01DB*e \".\u01DC\"\"2\u01DC3\u01DD*Y \".\u01DE\"\"2\u01DE3\u01DF*M \".\u01E0\"\"2\u01E03\u01E1*A \".\u01E2\"\"2\u01E23\u01E3*5 \".\u01E4\"\"2\u01E43\u01E5*) \".\u01E6\"\"2\u01E63\u01E7"),
          peg$decode(".\u01E8\"\"2\u01E83\u01E9*\u0491 \".\u01EA\"\"2\u01EA3\u01EB*\u0485 \".\u01EC\"\"2\u01EC3\u01ED*\u0479 \".\u01EE\"\"2\u01EE3\u01EF*\u046D \".\u01F0\"\"2\u01F03\u01F1*\u0461 \".\u01F2\"\"2\u01F23\u01F3*\u0455 \".\u01F4\"\"2\u01F43\u01F5*\u0449 \".\u01F6\"\"2\u01F63\u01F7*\u043D \".\u01F8\"\"2\u01F83\u01F9*\u0431 \".\u01FA\"\"2\u01FA3\u01FB*\u0425 \".\u01FC\"\"2\u01FC3\u01FD*\u0419 \".\u01FE\"\"2\u01FE3\u01FF*\u040D \".\u0200\"\"2\u02003\u0201*\u0401 \".\u0202\"\"2\u02023\u0203*\u03F5 \".\u0204\"\"2\u02043\u0205*\u03E9 \".\u0206\"\"2\u02063\u0207*\u03DD \".\u0208\"\"2\u02083\u0209*\u03D1 \".\u020A\"\"2\u020A3\u020B*\u03C5 \".\u020C\"\"2\u020C3\u020D*\u03B9 \".\u020E\"\"2\u020E3\u020F*\u03AD \".\u0210\"\"2\u02103\u0211*\u03A1 \".\u0212\"\"2\u02123\u0213*\u0395 \".\u0214\"\"2\u02143\u0215*\u0389 \".\u0216\"\"2\u02163\u0217*\u037D \".\u0218\"\"2\u02183\u0219*\u0371 \".\u021A\"\"2\u021A3\u021B*\u0365 \".\u021C\"\"2\u021C3\u021D*\u0359 \".\u021E\"\"2\u021E3\u021F*\u034D \".\u0220\"\"2\u02203\u0221*\u0341 \".\u0222\"\"2\u02223\u0223*\u0335 \".\u0224\"\"2\u02243\u0225*\u0329 \".\u0226\"\"2\u02263\u0227*\u031D \".\u0228\"\"2\u02283\u0229*\u0311 \".\u022A\"\"2\u022A3\u022B*\u0305 \".\u022C\"\"2\u022C3\u022D*\u02F9 \".\u022E\"\"2\u022E3\u022F*\u02ED \".\u0230\"\"2\u02303\u0231*\u02E1 \".\u0232\"\"2\u02323\u0233*\u02D5 \".\u0234\"\"2\u02343\u0235*\u02C9 \".\u0236\"\"2\u02363\u0237*\u02BD \".\u0238\"\"2\u02383\u0239*\u02B1 \".\u023A\"\"2\u023A3\u023B*\u02A5 \".\u023C\"\"2\u023C3\u023D*\u0299 \".\u023E\"\"2\u023E3\u023F*\u028D \".\u0240\"\"2\u02403\u0241*\u0281 \".\u0242\"\"2\u02423\u0243*\u0275 \".\u0244\"\"2\u02443\u0245*\u0269 \".\u0246\"\"2\u02463\u0247*\u025D \".\u0248\"\"2\u02483\u0249*\u0251 \".\u024A\"\"2\u024A3\u024B*\u0245 \".\u024C\"\"2\u024C3\u024D*\u0239 \".\u024E\"\"2\u024E3\u024F*\u022D \".\u0250\"\"2\u02503\u0251*\u0221 \".\u0252\"\"2\u02523\u0253*\u0215 \".\u0254\"\"2\u02543\u0255*\u0209 \".\u0256\"\"2\u02563\u0257*\u01FD \".\u0258\"\"2\u02583\u0259*\u01F1 \".\u025A\"\"2\u025A3\u025B*\u01E5 \".\u025C\"\"2\u025C3\u025D*\u01D9 \".\u025E\"\"2\u025E3\u025F*\u01CD \".\u0260\"\"2\u02603\u0261*\u01C1 \".\u0262\"\"2\u02623\u0263*\u01B5 \".\u0264\"\"2\u02643\u0265*\u01A9 \".\u0266\"\"2\u02663\u0267*\u019D \".\u0268\"\"2\u02683\u0269*\u0191 \".\u026A\"\"2\u026A3\u026B*\u0185 \".\u026C\"\"2\u026C3\u026D*\u0179 \".\u026E\"\"2\u026E3\u026F*\u016D \".\u0270\"\"2\u02703\u0271*\u0161 \".\u0272\"\"2\u02723\u0273*\u0155 \".\u0274\"\"2\u02743\u0275*\u0149 \".\u0276\"\"2\u02763\u0277*\u013D \".\u0278\"\"2\u02783\u0279*\u0131 \".\u027A\"\"2\u027A3\u027B*\u0125 \".\u027C\"\"2\u027C3\u027D*\u0119 \".\u027E\"\"2\u027E3\u027F*\u010D \".\u0280\"\"2\u02803\u0281*\u0101 \".\u0282\"\"2\u02823\u0283*\xF5 \".\u0284\"\"2\u02843\u0285*\xE9 \".\u0286\"\"2\u02863\u0287*\xDD \".\u0288\"\"2\u02883\u0289*\xD1 \".\u028A\"\"2\u028A3\u028B*\xC5 \".\u028C\"\"2\u028C3\u028D*\xB9 \".\u028E\"\"2\u028E3\u028F*\xAD \".\u0290\"\"2\u02903\u0291*\xA1 \".\u0292\"\"2\u02923\u0293*\x95 \".\u0294\"\"2\u02943\u0295*\x89 \".\u0296\"\"2\u02963\u0297*} \".\u0298\"\"2\u02983\u0299*q \".\u029A\"\"2\u029A3\u029B*e \".\u029C\"\"2\u029C3\u029D*Y \".\u029E\"\"2\u029E3\u029F*M \".\u02A0\"\"2\u02A03\u02A1*A \".\u02A2\"\"2\u02A23\u02A3*5 \".\u02A4\"\"2\u02A43\u02A5*) \".\u02A6\"\"2\u02A63\u02A7"),
          peg$decode(".\u02A8\"\"2\u02A83\u02A9*\u0131 \".\u02AA\"\"2\u02AA3\u02AB*\u0125 \".\u02AC\"\"2\u02AC3\u02AD*\u0119 \".\u0242\"\"2\u02423\u0243*\u010D \".\u0204\"\"2\u02043\u0205*\u0101 \".\u024A\"\"2\u024A3\u024B*\xF5 \".\u02AE\"\"2\u02AE3\u02AF*\xE9 \".\u02B0\"\"2\u02B03\u02B1*\xDD \".\\\"\"2\\3]*\xD1 \".\u02B2\"\"2\u02B23\u02B3*\xC5 \".^\"\"2^3_*\xB9 \".\u02B4\"\"2\u02B43\u02B5*\xAD \".\u029A\"\"2\u029A3\u029B*\xA1 \".\u021C\"\"2\u021C3\u021D*\x95 \".\u02B6\"\"2\u02B63\u02B7*\x89 \".\u02B8\"\"2\u02B83\u02B9*} \".\u02BA\"\"2\u02BA3\u02BB*q \".f\"\"2f3g*e \".\u02BC\"\"2\u02BC3\u02BD*Y \".\u02BE\"\"2\u02BE3\u02BF*M \".\u02C0\"\"2\u02C03\u02C1*A \".\u02C2\"\"2\u02C23\u02C3*5 \".\u02C4\"\"2\u02C43\u02C5*) \".\u02C6\"\"2\u02C63\u02C7")
        ],

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleIndices)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleIndex = peg$startRuleIndices[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$decode(s) {
      var bc = new Array(s.length), i;

      for (i = 0; i < s.length; i++) {
        bc[i] = s.charCodeAt(i) - 32;
      }

      return bc;
    }

    function peg$parseRule(index) {
      var bc    = peg$bytecode[index],
          ip    = 0,
          ips   = [],
          end   = bc.length,
          ends  = [],
          stack = [],
          params, i;

      function protect(object) {
        return Object.prototype.toString.apply(object) === "[object Array]" ? [] : object;
      }

      while (true) {
        while (ip < end) {
          switch (bc[ip]) {
            case 0:
              stack.push(protect(peg$consts[bc[ip + 1]]));
              ip += 2;
              break;

            case 1:
              stack.push(peg$currPos);
              ip++;
              break;

            case 2:
              stack.pop();
              ip++;
              break;

            case 3:
              peg$currPos = stack.pop();
              ip++;
              break;

            case 4:
              stack.length -= bc[ip + 1];
              ip += 2;
              break;

            case 5:
              stack.splice(-2, 1);
              ip++;
              break;

            case 6:
              stack[stack.length - 2].push(stack.pop());
              ip++;
              break;

            case 7:
              stack.push(stack.splice(stack.length - bc[ip + 1], bc[ip + 1]));
              ip += 2;
              break;

            case 8:
              stack.pop();
              stack.push(input.substring(stack[stack.length - 1], peg$currPos));
              ip++;
              break;

            case 9:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1]) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 10:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1] === peg$FAILED) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 11:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1] !== peg$FAILED) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 12:
              if (stack[stack.length - 1] !== peg$FAILED) {
                ends.push(end);
                ips.push(ip);

                end = ip + 2 + bc[ip + 1];
                ip += 2;
              } else {
                ip += 2 + bc[ip + 1];
              }

              break;

            case 13:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (input.length > peg$currPos) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 14:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length) === peg$consts[bc[ip + 1]]) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 15:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length).toLowerCase() === peg$consts[bc[ip + 1]]) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 16:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (peg$consts[bc[ip + 1]].test(input.charAt(peg$currPos))) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 17:
              stack.push(input.substr(peg$currPos, bc[ip + 1]));
              peg$currPos += bc[ip + 1];
              ip += 2;
              break;

            case 18:
              stack.push(peg$consts[bc[ip + 1]]);
              peg$currPos += peg$consts[bc[ip + 1]].length;
              ip += 2;
              break;

            case 19:
              stack.push(peg$FAILED);
              if (peg$silentFails === 0) {
                peg$fail(peg$consts[bc[ip + 1]]);
              }
              ip += 2;
              break;

            case 20:
              peg$reportedPos = stack[stack.length - 1 - bc[ip + 1]];
              ip += 2;
              break;

            case 21:
              peg$reportedPos = peg$currPos;
              ip++;
              break;

            case 22:
              params = bc.slice(ip + 4, ip + 4 + bc[ip + 3]);
              for (i = 0; i < bc[ip + 3]; i++) {
                params[i] = stack[stack.length - 1 - params[i]];
              }

              stack.splice(
                stack.length - bc[ip + 2],
                bc[ip + 2],
                peg$consts[bc[ip + 1]].apply(null, params)
              );

              ip += 4 + bc[ip + 3];
              break;

            case 23:
              stack.push(peg$parseRule(bc[ip + 1]));
              ip += 2;
              break;

            case 24:
              peg$silentFails++;
              ip++;
              break;

            case 25:
              peg$silentFails--;
              ip++;
              break;

            default:
              throw new Error("Invalid opcode: " + bc[ip] + ".");
          }
        }

        if (ends.length > 0) {
          end = ends.pop();
          ip = ips.pop();
        } else {
          break;
        }
      }

      return stack[0];
    }


      helpers = require('../lib/helpers');
      prefixes = require('./prefixes.json');
      multiply = helpers.multiply;
      topower = helpers.topower;
      cleanup = helpers.cleanup;


    peg$result = peg$parseRule(peg$startRuleIndex);

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();

},{"../lib/helpers":5,"./prefixes.json":2}],4:[function(require,module,exports){
(function (global){
global.ucum = require('../ucum.js');

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../ucum.js":6}],5:[function(require,module,exports){
module.exports = {

  enotation: function enontation(v){
    if (!v) return;
    v = v.match(/([\d\.]+)(?:e(-?\d+))?/);
    var num = parseFloat(v[1]);
    if (v[2]) num *= Math.pow(10,parseInt(v[2]));
    return num;
  },

  multiply: function multiply(t, ms) {
    if (ms.length == 0) return t;

    var ret = t;
    ms.forEach(function(mterm){

      var sign = (mterm[0] == "." ? 1 : -1);
      var b = mterm[1];

      ret.value *= Math.pow(b.value, sign);
      Object.keys(b.units).forEach(function(u){
        ret.units[u] = ret.units[u] || 0;
        ret.units[u] = ret.units[u] + sign*b.units[u];
        if (ret.units[u] == 0){
          delete ret.units[u];
        }
      });

    });
    return ret;
  },

  topower: function topower(e, exp){
    if (!exp) {exp = 1;}
    var ret = e;
    ret.value = Math.pow(ret.value, exp);
    Object.keys(e.units).forEach(function(u){
      ret.units[u] = e.units[u] * exp;
    });

    return ret;
  },

  cleanup: function cleanup(e) {
    ["10^", "10*"].forEach(function(k){
      if (e.units[k]) {
        e.value *= Math.pow(10, e.units[k]);
        delete e.units[k];
      }
    })
    return e;
  }
}

},{}],6:[function(require,module,exports){
parser = require('./generated/ucum-parser.js');
equivalents = require('./generated/equivalents.json');
helpers = require('./lib/helpers.js');

module.exports = {
  parse: parse,
  canonicalize: canonicalize,
  convert: convert
};

function parse(value, units){

  if (arguments.length === 1 || units === undefined){
    units = value;
    value = 1
  }

  if (units.match(/^\//)){
    units = '1'+units;
  }

  var ret = parser.parse(units);
  ret.value *= value;
  return ret;
}

function nonBaseUnit(u){
  return equivalents[u] !== undefined;
}

function remainingNonBaseUnits(value) {
  return Object.keys(value.units).filter(nonBaseUnit)
}

function canonicalize(value, units){

  value = parse(value, units);

  var remaining = remainingNonBaseUnits(value);

  while (remaining.length) {
    if (remaining.length === 0) {
      return false;
    }

    remaining.forEach(function(u){
      var sub = parse(equivalents[u].ucum);
      sub.value *= equivalents[u].value;
      sub = helpers.topower(sub, value.units[u]);
      value = helpers.multiply(value, [['.', sub]]);
      delete value.units[u];
    });

    remaining = remainingNonBaseUnits(value);
  }

  return value;
}

function conformant(a, b){
  var ret = true;
  Object.keys(a.units)
  .concat(Object.keys(b.units))
  .forEach(function(k){
    if (a.units[k] !== b.units[k]) {
      ret = false;
    }
  });
  
  return ret;
}

function convert(fromValue, fromUnits, toUnits){
 fromc = canonicalize(fromValue, fromUnits);
 toc = canonicalize(toUnits);

 if (!conformant(fromc, toc)){
   throw "Non-conformant units; can't convert from " + fromUnits + " to " + toUnits ;
 }

 return fromc.value / toc.value;

}

},{"./generated/equivalents.json":1,"./generated/ucum-parser.js":3,"./lib/helpers.js":5}]},{},[4])