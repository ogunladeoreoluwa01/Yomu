import { NavLink } from "react-router-dom";
const navbar = () => {
    return ( <>
    <nav className="glass h-fit py-10 px-2 my-2 rounded-md hidden md:inline-block">
<ul className="flex flex-col gap-4">
    <li>
    <NavLink 
  to="/"
  className={({ isActive }) =>
    isActive ? "text-xs font-sub font-semibold flex flex-col justify-center items-center border border-glass-border bg-main-glass rounded-md  w-[50px] h-[50px] text-white scale-110" : " hover:translate-y-[-0.25rem] hover:border hover:border-glass-border hover:bg-main-glass rounded-md  w-[50px] h-[50px] text-xs font-sub font-semibold flex flex-col justify-center items-center text-white hover:scale-105 ease-linear duration-300 transition-all"
  }
>
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" version="1.1" id="Home-1--Streamline-Plump">
    <path d="M19.54 2.8045600000000004C18.69884 2.85152 18.01732 3.0316000000000005 17.06 3.45988C13.501800000000001 5.05184 9.82064 7.29236 6.5200000000000005 9.87496C5.270320000000001 10.852760000000002 4.49992 11.52772 4.1462 11.95452C3.23584 13.05316 2.7431200000000002 14.25432 2.60168 15.72C2.55176 16.23712 2.45412 18.52624 2.3986 20.48C2.28964 24.31412 2.39804 31.692520000000002 2.57828 32.71212C2.9978 35.08496 4.74312 36.8832 7.091559999999999 37.36228C7.34628 37.41424 7.77956 37.45532 8.33156 37.479800000000004C13.331240000000001 37.70176 26.668760000000002 37.70176 31.66844 37.479800000000004C32.833760000000005 37.42808 33.38232 37.31204 34.18 36.94844C35.89196 36.16816 37.08676 34.6068 37.42172 32.71212C37.60144 31.6956 37.71048 24.26996 37.60132 20.48C37.54484 18.51848 37.44696 16.22336 37.39836 15.72C37.25672 14.254000000000001 36.764160000000004 13.05316 35.8538 11.95452C35.50008 11.52772 34.72968 10.852760000000002 33.480000000000004 9.87496C30.179360000000003 7.29236 26.4982 5.05184 22.94 3.45988C21.712680000000002 2.9108 20.7974 2.7343599999999997 19.54 2.8045600000000004M19.50528 5.3264C18.83472 5.40296 18.34504 5.5964 16.52 6.50568C13.9404 7.79088 11.648119999999999 9.19008 9.32 10.90048C8.1068 11.7918 6.43012 13.15788 6.122720000000001 13.50548C5.5788400000000005 14.12048 5.23568 14.89124 5.12312 15.75052C5.07704 16.1024 4.983960000000001 18.06444 4.91388 20.16C4.78628 23.977159999999998 4.90328 31.72692 5.101120000000001 32.56C5.2514 33.193000000000005 5.7278 33.9094 6.268 34.31472C6.8560799999999995 34.756 7.3306 34.911680000000004 8.24 34.9618C10.820640000000001 35.10404 18.85936 35.18828 24.01 35.12708C30.36032 35.051640000000006 32.21264 34.99016 32.6974 34.83884C33.25448 34.66488 33.659800000000004 34.42168 34.06076 34.02076C34.478519999999996 33.602959999999996 34.75944 33.10848 34.89784 32.54724C35.097280000000005 31.73864 35.21468 23.99264 35.0856 20.16C35.01352 18.01976 34.9226 16.09724 34.877 15.75052C34.763960000000004 14.890440000000002 34.42104 14.120360000000002 33.87728 13.50548C33.56988 13.15788 31.893200000000004 11.7918 30.68 10.90048C28.35188 9.19008 26.0596 7.79088 23.48 6.50568C21.60328 5.57064 21.17772 5.40556 20.43156 5.3229999999999995C19.99916 5.275119999999999 19.95276 5.275320000000001 19.50528 5.3264M13.42668 29.7238C13.21588 29.773760000000003 12.871400000000001 30.010279999999998 12.746920000000001 30.190520000000003C12.57176 30.444200000000002 12.511120000000002 30.63848 12.511120000000002 30.94604C12.511120000000002 31.44524 12.7754 31.8548 13.24 32.07548L13.46 32.18 20 32.18L26.54 32.18 26.76 32.07548C27.227 31.853640000000002 27.488879999999998 31.44564 27.488879999999998 30.94C27.488879999999998 30.445320000000002 27.230120000000003 30.032040000000002 26.77476 29.79948L26.580000000000002 29.7 20.080000000000002 29.69372C16.29708 29.69008 13.515920000000001 29.702640000000002 13.42668 29.7238" stroke="none" fill="currentColor" fill-rule="evenodd"></path>
  </svg>
  <span className="flex items-center justify-center gap-1">
    <h1>Home</h1>
  </span>
</NavLink>

    </li>
    <li>
    <NavLink 
  to="/explore"
  className={({ isActive }) =>
    isActive ? "text-[0.6rem] font-sub font-semibold flex flex-col justify-center items-center border border-glass-border bg-main-glass rounded-md  w-[50px] h-[50px] text-white scale-110" : " hover:translate-y-[-0.25rem] hover:border hover:border-glass-border hover:bg-main-glass rounded-md  w-[50px] h-[50px] text-[0.6rem] font-sub font-semibold flex flex-col justify-center items-center text-white hover:scale-105 ease-linear duration-300 transition-all"
  }
>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" version="1.1" id="Safari--Streamline-Plump">
	<path d="M19.240000000000002 2.36456C16.4468 2.46988 13.718040000000002 3.25488 11.22 4.6717200000000005C9.797 5.47884 8.16596 6.7793600000000005 7.044560000000001 8.0012C5.274160000000001 9.93004 3.9654000000000003 12.165360000000002 3.18436 14.59436C2.845 15.64972 2.569 16.94276 2.4396400000000003 18.08364C2.32212 19.12008 2.33128 20.98968 2.45912 22.0542C2.70368 24.09072 3.25 25.945680000000003 4.1355200000000005 27.746199999999998C4.5688 28.62724 4.75656 28.95408 5.303719999999999 29.78C6.5944 31.72816 8.26068 33.394040000000004 10.22 34.6952C11.04416 35.24252 11.36992 35.4298 12.25664 35.86596C14.90452 37.168440000000004 17.66792 37.74304 20.75516 37.63312C23.17644 37.54688 25.54232 36.948640000000005 27.74336 35.86596C28.63008 35.4298 28.95584 35.24252 29.78 34.6952C31.741 33.39296 33.3952 31.73884 34.6954 29.78C35.24276 28.9554 35.43004 28.62956 35.86596 27.74336C37.168440000000004 25.09548 37.74304 22.33208 37.63312 19.24484C37.54688 16.82356 36.948640000000005 14.45768 35.86596 12.25664C35.43004 11.37044 35.24276 11.0446 34.6954 10.22C33.3952 8.26116 31.741 6.60704 29.78 5.3048C28.95584 4.75748 28.63008 4.5702 27.74336 4.13404C25.58352 3.07164 23.15248 2.4478 20.900000000000002 2.37792C20.526 2.36632 20.166 2.35228 20.1 2.3467599999999997C20.034000000000002 2.3412 19.647000000000002 2.34924 19.240000000000002 2.36456M19.32 4.8672C17.229680000000002 4.96212 15.234359999999999 5.47396 13.34 6.4012C11.76036 7.17436 10.55924 8.03468 9.29696 9.29696C7.511839999999999 11.08204 6.3094399999999995 13.067919999999999 5.52856 15.5208C5.0776 16.93736 4.86556 18.37944 4.86704 20.02C4.86916 22.425639999999998 5.3512 24.51136 6.4016 26.66C6.81008 27.495520000000003 7.15808 28.085520000000002 7.6377999999999995 28.755920000000003C9.91812 31.94268 13.241679999999999 34.099160000000005 17.04 34.85652C18.9492 35.23724 21.0508 35.23724 22.96 34.85652C26.25568 34.199360000000006 29.221799999999998 32.47424 31.44752 29.92C34.98484 25.8606 36.08108 20.165960000000002 34.31136 15.042760000000001C33.31104 12.14696 31.46928 9.64424 28.98 7.79828C26.2364 5.763680000000001 22.76624 4.7107600000000005 19.32 4.8672M19.61432 5.521319999999999C19.28208 5.62368 18.893440000000002 6.02116 18.80136 6.352720000000001C18.732960000000002 6.598920000000001 18.74912 7.7138 18.82424 7.93428C18.912480000000002 8.19328 19.22484 8.525839999999999 19.4892 8.64236C19.779880000000002 8.77044 20.21732 8.77168 20.503960000000003 8.64528C20.74196 8.540320000000001 20.99444 8.29492 21.126640000000002 8.040000000000001C21.214879999999997 7.86992 21.22 7.818160000000001 21.22 7.1000000000000005C21.22 6.3844 21.21464 6.32996 21.128359999999997 6.16836C21.01004 5.94676 20.76872 5.706760000000001 20.551640000000003 5.59476C20.35812 5.494880000000001 19.83348 5.4538 19.61432 5.521319999999999M10.245560000000001 9.40588C9.95168 9.49048 9.63684 9.76432 9.4772 10.07432C9.341280000000001 10.33824 9.32672 10.7526 9.44256 11.06C9.51872 11.262039999999999 9.60316 11.37044 9.97652 11.745360000000002C10.511880000000001 12.282960000000001 10.65964 12.3672 11.11088 12.39196C11.42024 12.40896 11.458520000000002 12.401880000000002 11.69984 12.28308C11.96116 12.15444 12.15368 11.962560000000002 12.305 11.68C12.36328 11.571240000000001 12.37996 11.4552 12.37988 11.16C12.379760000000001 10.66108 12.31896 10.54772 11.745360000000002 9.97652C11.375 9.60772 11.261 9.51844 11.06848 9.446520000000001C10.82164 9.354280000000001 10.48308 9.33756 10.245560000000001 9.40588M26.1 10.948440000000002C25.75076 10.978399999999999 25.3028 11.11032 23.42 11.7378C18.650920000000003 13.32716 16.08212 14.40648 15.25588 15.168040000000001C14.537080000000001 15.83064 13.436 18.36752 11.93468 22.82C10.96936 25.682800000000004 10.90912 25.914520000000003 10.96392 26.55264C11.05532 27.616 11.80532 28.5764 12.79232 28.893960000000003C13.22876 29.034360000000003 13.28492 29.04364 13.70044 29.04364C14.16532 29.04364 14.36008 28.99444 15.92572 28.4816C21.156399999999998 26.768200000000004 24.143159999999998 25.50884 24.85576 24.71624C25.627440000000004 23.858 26.870279999999998 20.84476 28.4816 15.92572C29.0402 14.2204 29.05296 14.165519999999999 29.02796 13.58C29.01176 13.20068 28.985039999999998 13.03524 28.90052 12.79128C28.63252 12.01732 27.96704 11.35392 27.20768 11.103599999999998C26.81984 10.975760000000001 26.425520000000002 10.92052 26.1 10.948440000000002M25 13.85604C22.1266 14.79804 19.5618 15.72772 18.406679999999998 16.24596L18.14404 16.3638 20.88096 19.10096C22.386280000000003 20.6064 23.63052 21.825039999999998 23.64596 21.80904C23.750079999999997 21.70128 24.70372 19.220840000000003 25.27192 17.580000000000002C25.676640000000003 16.41116 26.560000000000002 13.73616 26.560000000000002 13.679400000000001C26.560000000000002 13.61824 26.373760000000004 13.43972 26.311799999999998 13.441479999999999C26.28332 13.44232 25.693 13.628879999999999 25 13.85604M16.257080000000002 18.381600000000002C15.70344 19.6274 14.67 22.48532 13.77768 25.23824C13.275640000000001 26.787080000000003 13.18988 26.7358 15.182360000000001 26.078159999999997C17.103080000000002 25.44424 18.268040000000003 25.03996 19.5 24.57984C20.49792 24.20716 21.75404 23.699119999999997 21.80904 23.64596C21.825039999999998 23.63052 20.606199999999998 22.386080000000003 19.10056 20.88056L16.363 18.143240000000002 16.257080000000002 18.381600000000002M6.33432 18.80364C5.99832 18.901 5.61084 19.30348 5.51616 19.65348C5.4503200000000005 19.89704 5.48988 20.34588 5.59532 20.551640000000003C5.70648 20.76852 5.9465200000000005 21.009960000000003 6.16836 21.12808C6.32436 21.21112 6.402880000000001 21.22072 7.0297600000000005 21.233040000000003C7.8614 21.2494 8.01176 21.213040000000003 8.3352 20.917440000000003C8.62404 20.65344 8.735240000000001 20.39848 8.735240000000001 20C8.735240000000001 19.602 8.624 19.34652 8.33616 19.08344C8.02424 18.7984 7.87348 18.75928 7.10288 18.7636C6.74928 18.7656 6.403440000000001 18.7836 6.33432 18.80364M32.04932 18.82512C31.803960000000004 18.91424 31.46948 19.23536 31.357640000000004 19.4892C31.287480000000002 19.64848 31.264760000000003 19.773320000000002 31.264760000000003 20C31.264760000000003 20.39848 31.37596 20.65344 31.6648 20.917440000000003C31.98824 21.213040000000003 32.138600000000004 21.2494 32.97024 21.233040000000003C33.748000000000005 21.21772 33.8536 21.1864 34.160000000000004 20.88C34.433800000000005 20.606199999999998 34.49976 20.43532 34.49976 20C34.49976 19.564680000000003 34.433800000000005 19.393800000000002 34.160000000000004 19.12C33.848800000000004 18.8088 33.7524 18.78128 32.94 18.77164C32.37328 18.76492 32.18368 18.776320000000002 32.04932 18.82512M28.29248 27.71864C28.00456 27.8642 27.827600000000004 28.050079999999998 27.68924 28.352240000000002C27.60296 28.540760000000002 27.59268 28.609560000000002 27.60828 28.89408C27.632759999999998 29.339760000000002 27.718519999999998 29.48964 28.25464 30.02348C28.62956 30.39684 28.737959999999998 30.48128 28.94 30.557440000000003C29.94792 30.93732 30.93732 29.94792 30.557440000000003 28.94C30.48128 28.737959999999998 30.39684 28.62956 30.02348 28.25464C29.4828 27.71168 29.34044 27.63136 28.88 27.6096C28.562399999999997 27.59456 28.52368 27.60176 28.29248 27.71864M19.70936 31.2812C19.45552 31.344920000000002 19.25932 31.46676 19.06832 31.6792C18.78788 31.991080000000004 18.75084 32.149879999999996 18.76696 32.97024C18.78228 33.748000000000005 18.8136 33.8536 19.12 34.160000000000004C19.393800000000002 34.433800000000005 19.564680000000003 34.49976 20 34.49976C20.43532 34.49976 20.606199999999998 34.433800000000005 20.88 34.160000000000004C21.1864 33.8536 21.21772 33.748000000000005 21.233040000000003 32.97024C21.24412 32.40692 21.2344 32.243719999999996 21.179920000000003 32.0798C21.09104 31.812199999999997 20.78252 31.47676 20.52232 31.364800000000002C20.29004 31.264879999999998 19.92416 31.227240000000002 19.70936 31.2812" stroke="none" fill="currentColor" fill-rule="evenodd"></path>
</svg>
  <span className="flex items-center justify-center gap-1">
    <h1>Explore</h1>
  </span>
</NavLink>

    </li>
    <li>
    <NavLink 
  to="/updates"
  className={({ isActive }) =>
    isActive ? "text-[0.6rem] font-sub font-semibold flex flex-col justify-center items-center border border-glass-border bg-main-glass rounded-md  w-[50px] h-[50px] text-white scale-110" : " hover:translate-y-[-0.25rem] hover:border hover:border-glass-border hover:bg-main-glass rounded-md  w-[50px] h-[50px] text-[0.6rem] font-sub font-semibold flex flex-col justify-center items-center text-white hover:scale-105 ease-linear duration-300 transition-all"
  }
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-1.25 -1.25 40 40" id="Synchronize--Streamline-Plump" height="40" width="40"><desc>Synchronize Streamline Icon: https://streamlinehq.com</desc><g id="synchronize--arrows-loading-load-sync-synchronize-arrow-reload"><path id="Union" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.062421875 2.4321562500000002c1.003984375 -0.1044296875 1.901640625 0.57378125 1.89328125 1.5831718750000001 -0.0053124999999999995 0.6481484375 -0.09914062500000001 1.4495078125 -0.39078124999999997 2.3398125 -0.257578125 0.7864296875 -1.02453125 1.2448046875 -1.838359375 1.3946171875 -3.111171875 0.5726640625 -5.96109375 2.4544609375 -7.666796874999999 5.4088359375 -2.4231328125 4.19703125 -1.8171484375000002 9.311562499999999 1.139609375 12.81203125 0.671171875 -0.5165625 1.251328125 -0.9377343749999999 1.745 -1.279375 1.073359375 -0.742890625 2.3546875 -0.048671875 2.3360937500000003 1.2565625 -0.029062499999999998 2.0421875 -0.265390625 4.2615625 -0.5242187500000001 6.1228125 -0.15921875000000002 1.144921875 -1.155 1.980546875 -2.310234375 1.93859375 -1.8926562500000002 -0.068828125 -4.1396328125 -0.223359375 -6.1683593750000005 -0.554609375 -1.274015625 -0.20812500000000003 -1.7305156249999998 -1.563203125 -0.8234609375 -2.48171875 0.45775781249999997 -0.46359375 1.0293750000000002 -1.0140625 1.738296875 -1.6551562499999999 -4.3204453125 -5.1334375 -5.201546875 -12.62203125 -1.6527500000000002 -18.76875C7.273390624999999 5.814171875 12.010859375 2.9576171875000004 17.062421875 2.4321562500000002Z" stroke-width="2.5"></path><path id="Union_2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.437578125 35.0675c-1.003984375 0.104375 -1.9017187500000001 -0.573828125 -1.8933593750000002 -1.583203125 0.005390625 -0.648125 0.09921875 -1.44953125 0.39085937499999995 -2.33984375 0.257578125 -0.78640625 1.02453125 -1.2447656249999999 1.838359375 -1.394609375 3.111171875 -0.57265625 5.96109375 -2.454453125 7.666796874999999 -5.408828125 2.4231249999999998 -4.196953124999999 1.8171093749999998 -9.311562499999999 -1.1396875 -12.81203125 -0.671171875 0.5165625 -1.25125 0.9378124999999999 -1.744921875 1.2794531249999999 -1.073359375 0.7428125 -2.3546875 0.04859375 -2.3360937500000003 -1.256640625 0.029062499999999998 -2.0421875 0.2653125 -4.261578125 0.524140625 -6.1227734375 0.15921875000000002 -1.1449453125 1.155078125 -1.9805703125 2.310234375 -1.9385859375 1.8927343749999999 0.06878124999999999 4.1396875 0.2233046875 6.1684375 0.5546171875 1.273984375 0.2080625 1.73046875 1.563203125 0.8234375 2.48171875 -0.45773437499999997 0.46354687499999997 -1.0293750000000002 1.0139921875 -1.73828125 1.6551015624999998 4.32046875 5.1334375 5.2015625000000005 12.622109375 1.6527343749999999 18.76875 -2.7336718749999998 4.73484375 -7.4711718750000005 7.59140625 -12.52265625 8.116875Z" stroke-width="2.5"></path></g></svg>
  <span className="flex items-center justify-center gap-1">
    <h1>Updates</h1>
  </span>
</NavLink>

    </li>
    <li>
    <NavLink 
  to="/setting"
  className={({ isActive }) =>
    isActive ? "text-[0.6rem] font-sub font-semibold flex flex-col justify-center items-center border border-glass-border bg-main-glass rounded-md  w-[50px] h-[50px] text-white scale-110" : " hover:translate-y-[-0.25rem] hover:border hover:border-glass-border hover:bg-main-glass rounded-md  w-[50px] h-[50px] text-[0.6rem] font-sub font-semibold flex flex-col justify-center items-center text-white hover:scale-105 ease-linear duration-300 transition-all"
  }
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-1.25 -1.25 40 40" id="Cog--Streamline-Plump" height="40" width="40"><desc>Cog Streamline Icon: https://streamlinehq.com</desc><g id="cog--work-loading-cog-gear-settings-machine"><path id="Union" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.967187500000001 3.4078125c0.08984375 -0.1875 0.21953125 -0.35234375 0.40390625 -0.44921874999999994 0.43750000000000006 -0.2296875 1.459375 -0.61484375 3.3796874999999997 -0.61484375 1.9203125 0 2.94140625 0.38515625 3.37890625 0.61484375 0.18437499999999998 0.096875 0.3140625 0.26171875 0.40468750000000003 0.44921874999999994 0.26171875 0.546875 0.8453125 1.8078125 1.28359375 3.0625a13.267187499999999 13.267187499999999 0 0 1 3.0296875 1.7515625c1.30625 -0.24765625 2.69296875 -0.37265624999999997 3.2984375000000004 -0.41953125 0.20703125 -0.015625 0.41484375 0.014062499999999999 0.590625 0.125 0.41796875 0.26484375000000004 1.2625000000000002 0.9562499999999999 2.221875 2.61953125 0.9609375 1.66328125 1.1375 2.73984375 1.1578125 3.2343749999999996 0.0078125 0.2078125 -0.06953125 0.40234375 -0.1875 0.57421875 -0.34296875 0.50078125 -1.14375 1.63828125 -2.0109375 2.6453125a13.40390625 13.40390625 0 0 1 0 3.4984374999999996c0.8671875000000001 1.0078125 1.6679687499999998 2.14453125 2.0109375 2.6453125 0.1171875 0.171875 0.1953125 0.3671875 0.1875 0.57421875 -0.0203125 0.49453125 -0.19765625 1.5710937500000002 -1.1578125 3.2343749999999996 -0.96015625 1.66328125 -1.8046875 2.3546875 -2.221875 2.61953125 -0.17578125 0.1109375 -0.3828125 0.140625 -0.59140625 0.125 -0.60546875 -0.046875 -1.99140625 -0.171875 -3.296875 -0.41953125a13.264062500000001 13.264062500000001 0 0 1 -3.0296875 1.7523437499999999c-0.4390625 1.25390625 -1.02265625 2.5140625 -1.2843749999999998 3.0625 -0.09062500000000001 0.1875 -0.22031249999999997 0.3515625 -0.40468750000000003 0.4484375 -0.43750000000000006 0.2296875 -1.45859375 0.61484375 -3.37890625 0.61484375s-2.94140625 -0.38515625 -3.3796874999999997 -0.61484375c-0.18437499999999998 -0.096875 -0.3140625 -0.2609375 -0.40390625 -0.44921874999999994 -0.26171875 -0.546875 -0.84609375 -1.8078125 -1.2843749999999998 -3.0625a13.26953125 13.26953125 0 0 1 -3.0296875 -1.7515625c-1.30625 0.24765625 -2.6921875 0.37265624999999997 -3.296875 0.41953125 -0.2078125 0.015625 -0.415625 -0.014062499999999999 -0.59140625 -0.125 -0.41796875 -0.26484375000000004 -1.2625000000000002 -0.9562499999999999 -2.22265625 -2.61953125 -0.96015625 -1.66328125 -1.13671875 -2.73984375 -1.15625 -3.2343749999999996 -0.009375 -0.2078125 0.06874999999999999 -0.40234375 0.18671875 -0.57421875 0.34296875 -0.50078125 1.14375 -1.63828125 2.0109375 -2.6453125a13.405468749999999 13.405468749999999 0 0 1 0 -3.4984374999999996c-0.8671875000000001 -1.0078125 -1.6679687499999998 -2.14453125 -2.01171875 -2.6453125 -0.1171875 -0.171875 -0.1953125 -0.3671875 -0.1875 -0.57421875 0.02109375 -0.49453125 0.19765625 -1.5710937500000002 1.1578125 -3.2343749999999996 0.9609375 -1.66328125 1.8046875 -2.3546875 2.221875 -2.61953125 0.1765625 -0.1109375 0.38359375 -0.140625 0.59140625 -0.125 0.60546875 0.046875 1.9921874999999998 0.171875 3.29765625 0.41953125a13.264843749999999 13.264843749999999 0 0 1 3.0296875 -1.7523437499999999c0.43828125000000007 -1.25390625 1.02265625 -2.51484375 1.2843749999999998 -3.0625Z" stroke-width="2.5"></path><path id="Ellipse 540" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.9375 18.75a7.8125 7.8125 0 1 0 15.625 0 7.8125 7.8125 0 1 0 -15.625 0" stroke-width="2.5"></path></g></svg>
  <span className="flex items-center justify-center gap-1">
    <h1>Settings</h1>
  </span>
</NavLink>

    </li>
</ul>
   
    </nav>
    
    </> );
}
 
export default navbar;