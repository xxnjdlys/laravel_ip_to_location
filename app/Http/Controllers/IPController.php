<?php

namespace App\Http\Controllers;

use App\Http\Utils\ip;
use Illuminate\Http\Request;

class IPController extends Controller
{
    /**
     * 根据 ip 显示地址
     * @param Request $request
     * @return false|string
     *
     * http://127.0.0.1:8000/api/get/ip?ip=23.142.224.96
     */
    public function IPLocation(Request $request): string
    {
        $info = [];
        $requestIp = $request->input("ip", "");
        // 未能从参数中获取到 ip=??? 的值
        if (empty($requestIp)) {
            $info ['status'] = 1;
            $info ['msg'] = "缺少必要参数.";
            $info['location'] = "";
            return json_encode($info);
        }
        $ip = new ip();
        $localIp = $ip->find($requestIp);
        $location = !empty($localIp[1]) ? $localIp[1] : "IP未知";
        if ('局域网' == $location || '共享地址' == $location) {
            $info['location'] = "";
        } else {
            $info['location'] = $location;
        }
        return json_encode($info);
    }
}
