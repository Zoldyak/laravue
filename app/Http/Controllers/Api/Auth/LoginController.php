<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class LoginController extends Controller
{
    function login(Request $request)  {
        $user = $request->validate([
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        if (! Auth::attempt($user)) {
            return response()->json([
                'message' => 'Authentication is invalid.',
                'errors' => [
                    'root' => 'Could not sign in with those details.'
                ]
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $accessToken= Auth::user()->createToken('access_token')->accessToken;
        
        return response()->json([
            'message' => 'successkuu',
            'data' => Auth::user(),
            'meta' => [
                'token' => $accessToken
            ]
            ], Response::HTTP_CREATED);
    }
    function logout()  {
        Auth::user()->token()->revoke();
        return response()->json([
            'message' => 'Logout',
            ], Response::HTTP_OK);
    }
}
