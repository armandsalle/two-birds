import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="container mt-40 ">
      <div className="logo">
        <Link to="/">
          <svg
            className="logo__svg"
            viewBox="0 0 1374 234"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M103 188.784V231H81.216C62.4 231 47.712 226.512 37.152 217.296C26.784 207.888 21.6 192.432 21.6 170.928V111.888H0V70H21.6V30.96H70.848V70H103V111.888H70.848V171.792C70.848 178.128 72.096 182.544 74.592 185.04C77.28 187.536 81.696 188.784 87.84 188.784H103Z"
              fill="black"
            />
            <path
              d="M452.52 68.3999C468.456 68.3999 482.664 71.7599 495.144 78.4799C507.816 85.0079 517.704 94.5119 524.808 106.992C532.104 119.472 535.752 134.064 535.752 150.768C535.752 167.472 532.104 182.064 524.808 194.544C517.704 207.024 507.816 216.624 495.144 223.344C482.664 229.872 468.456 233.136 452.52 233.136C436.584 233.136 422.28 229.872 409.608 223.344C396.936 216.624 386.952 207.024 379.656 194.544C372.552 182.064 369 167.472 369 150.768C369 134.064 372.552 119.472 379.656 106.992C386.952 94.5119 396.936 85.0079 409.608 78.4799C422.28 71.7599 436.584 68.3999 452.52 68.3999ZM452.52 111.024C443.112 111.024 435.144 114.48 428.616 121.392C422.28 128.112 419.112 137.904 419.112 150.768C419.112 163.632 422.28 173.424 428.616 180.144C435.144 186.864 443.112 190.224 452.52 190.224C461.928 190.224 469.8 186.864 476.136 180.144C482.472 173.424 485.64 163.632 485.64 150.768C485.64 137.904 482.472 128.112 476.136 121.392C469.8 114.48 461.928 111.024 452.52 111.024Z"
              fill="black"
            />
            <path
              d="M656.077 68.4C669.325 68.4 681.133 71.76 691.501 78.48C702.061 85.008 710.317 94.512 716.269 106.992C722.413 119.28 725.485 133.872 725.485 150.768C725.485 167.472 722.413 182.064 716.269 194.544C710.317 207.024 702.061 216.624 691.501 223.344C681.133 229.872 669.325 233.136 656.077 233.136C643.789 233.136 633.229 230.352 624.397 224.784C615.565 219.216 609.032 211.632 605 202.032V231H556V18H605L605.101 99.504C609.133 89.904 615.565 82.32 624.397 76.752C633.229 71.184 643.789 68.4 656.077 68.4ZM640.237 111.6C629.869 111.6 621.325 115.152 614.605 122.256C608.077 129.168 604.813 138.672 604.813 150.768C604.813 162.672 608.077 172.176 614.605 179.28C621.325 186.384 629.869 189.936 640.237 189.936C650.797 189.936 659.245 186.48 665.581 179.568C672.109 172.656 675.373 163.056 675.373 150.768C675.373 138.48 672.109 128.88 665.581 121.968C659.245 115.056 650.797 111.6 640.237 111.6Z"
              fill="black"
            />
            <path d="M800 83V231H751V83H800Z" fill="black" />
            <path
              d="M754.064 25.488C748.688 30.288 746 36.432 746 43.92C746 51.216 748.688 57.36 754.064 62.352C759.44 67.152 766.544 69.552 775.376 69.552C784.208 69.552 791.312 67.152 796.688 62.352C802.064 57.36 804.752 51.216 804.752 43.92C804.752 36.432 802.064 30.288 796.688 25.488C791.312 20.496 784.208 18 775.376 18C766.544 18 759.44 20.496 754.064 25.488Z"
              fill="black"
            />
            <path
              d="M1306.06 186.488C1300.69 191.288 1298 197.432 1298 204.92C1298 212.216 1300.69 218.36 1306.06 223.352C1311.44 228.152 1318.54 230.552 1327.38 230.552C1336.21 230.552 1343.31 228.152 1348.69 223.352C1354.06 218.36 1356.75 212.216 1356.75 204.92C1356.75 197.432 1354.06 191.288 1348.69 186.488C1343.31 181.496 1336.21 179 1327.38 179C1318.54 179 1311.44 181.496 1306.06 186.488Z"
              fill="black"
            />
            <path
              d="M883 100.656C889.144 90.864 897.554 83.088 907.154 77.328C916.946 71.568 927.672 68.688 939 68.688V121.392H924.722C911.666 121.392 901.49 124.176 894.194 129.744C887.09 135.312 883 144.72 883 157.968V231H834V70H883V100.656Z"
              fill="black"
            />
            <path
              d="M1020.41 68.4C1032.7 68.4 1043.26 71.184 1052.09 76.752C1060.92 82.32 1066.87 89.904 1070.91 99.504V18H1120.91V231H1070.91V202C1066.87 211.6 1060.92 219.216 1052.09 224.784C1043.26 230.352 1032.7 233.136 1020.41 233.136C1007.16 233.136 995.256 229.872 984.696 223.344C974.328 216.624 966.072 207.024 959.928 194.544C953.976 182.064 951 167.472 951 150.768C951 133.872 953.976 119.28 959.928 106.992C966.072 94.512 974.328 85.008 984.696 78.48C995.256 71.76 1007.16 68.4 1020.41 68.4ZM1036.25 111.6C1025.69 111.6 1017.14 115.056 1010.62 121.968C1004.28 128.88 1001.11 138.48 1001.11 150.768C1001.11 163.056 1004.28 172.656 1010.62 179.568C1017.14 186.48 1025.69 189.936 1036.25 189.936C1046.62 189.936 1055.06 186.384 1061.59 179.28C1068.31 172.176 1071.67 162.672 1071.67 150.768C1071.67 138.672 1068.31 129.168 1061.59 122.256C1055.06 115.152 1046.62 111.6 1036.25 111.6Z"
              fill="black"
            />
            <path
              d="M1206.51 68.3999C1226.86 68.3999 1243.09 73.4879 1255.18 83.6639C1267.47 93.8399 1275.15 107.28 1278.22 123.984H1232.14C1230.8 117.456 1227.73 112.368 1222.93 108.72C1218.32 104.88 1212.46 102.96 1205.36 102.96C1199.79 102.96 1195.57 104.208 1192.69 106.704C1189.81 109.008 1188.37 112.368 1188.37 116.784C1188.37 121.776 1190.96 125.52 1196.14 128.016C1201.52 130.512 1209.87 133.008 1221.2 135.504C1233.49 138.384 1243.57 141.36 1251.44 144.432C1259.31 147.312 1266.13 152.112 1271.89 158.832C1277.65 165.552 1280.53 174.576 1280.53 185.904C1280.53 195.12 1278.03 203.28 1273.04 210.384C1268.05 217.488 1260.85 223.056 1251.44 227.088C1242.03 231.12 1230.9 233.136 1218.03 233.136C1196.34 233.136 1178.96 228.336 1165.9 218.736C1152.85 209.136 1144.88 195.408 1142 177.552H1189.52C1190.29 184.464 1193.17 189.744 1198.16 193.392C1203.34 197.04 1209.97 198.864 1218.03 198.864C1223.6 198.864 1227.82 197.616 1230.7 195.12C1233.58 192.432 1235.02 188.976 1235.02 184.752C1235.02 179.184 1232.34 175.248 1226.96 172.944C1221.78 170.448 1213.23 167.856 1201.33 165.168C1189.42 162.672 1179.63 159.984 1171.95 157.104C1164.27 154.224 1157.65 149.616 1152.08 143.28C1146.51 136.752 1143.73 127.92 1143.73 116.784C1143.73 102.384 1149.2 90.7679 1160.14 81.9359C1171.09 72.9119 1186.54 68.3999 1206.51 68.3999Z"
              fill="black"
            />
            <path
              d="M366 70L325 231H270L241 124L211 231H156L115 70H164L186 185L215 70H268L299 185L320 70H366Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
    </header>
  )
}

export default Header
