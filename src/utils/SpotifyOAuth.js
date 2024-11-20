const clientId = '8aad73bbcff44a98bb63d77fcb9fadb3';
const redirectUri = 'http://localhost:3000'; // your redirect URL - must be localhost URL and/or HTTPS

const redirectToSpotifyAuthorize = async () => {
    // Reference Documentation: https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow
    // Code Verifier
    const generateRandomString = (length) => {
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const values = crypto.getRandomValues(new Uint8Array(length));
        return values.reduce((acc, x) => acc + possible[x % possible.length], "");
    } 
    const codeVerifier  = generateRandomString(64);

    // Code Challenge
    const sha256 = async (plain) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return window.crypto.subtle.digest('SHA-256', data)
    }
    const base64encode = (input) => {
        return btoa(String.fromCharCode(...new Uint8Array(input)))
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
    }
    const hashed = await sha256(codeVerifier)
    const codeChallenge = base64encode(hashed);

    // Request User Authorization
    const scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private playlist-read-private';
    const authUrl = new URL("https://accounts.spotify.com/authorize");

    window.localStorage.setItem('code_verifier', codeVerifier);

    const params =  {
    response_type: 'code',
    client_id: clientId,
    scope: scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
    }

    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
}

// On page load, try to fetch auth code from current browser search URL
const checkForAuthCode = async () => {
    // Response
        // If the user accepts the requested permissions, the OAuth service redirects the user back to the URL specified in the redirect_uri field. 
        // This callback contains two query parameters within the URL: 
            // code	- An authorization code that can be exchanged for an access token.
            // state - The value of the state parameter supplied in the request.
        // We must then parse the URL to retrieve the code parameter:
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');

    if (code) {
        await getToken(code);
        
        // Remove code from URL so we can refresh correctly.
        const url = new URL(window.location.href);
        url.searchParams.delete("code");

        const updatedUrl = url.search ? url.href : url.href.replace('?', '');
        window.history.replaceState({}, '', updatedUrl);
        
    } else {console.log(`no code in response, error: ${urlParams.get('error')}`)}
    if (!localStorage.getItem('access_token')) { 
        return false
     } else {return true};
}


// Request an access token
const getToken = async code => {

    // stored in the previous step
    let code_verifier = localStorage.getItem('code_verifier');
    const token_endpoint = new URL('https://accounts.spotify.com/api/token');
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
        code_verifier: code_verifier,
      }),
    }
  
    const body = await fetch(token_endpoint, payload);
    const response = await body.json();
  
    localStorage.setItem('access_token', response.access_token);
    localStorage.setItem('expires_in', response.expires_in);
    localStorage.setItem('refresh_token', response.refresh_token);
    
    return response;
  }

// Refreshing Tokens
const getRefreshToken = async () => {

    // refresh token that has been previously stored
    const refreshToken = localStorage.getItem('refresh_token');
    const url = "https://accounts.spotify.com/api/token";

    const payload = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: clientId
    }),
    }
    const body = await fetch(url, payload);
    const response = await body.json();

    localStorage.setItem('access_token', response.accessToken);
    if (response.refreshToken) {
    localStorage.setItem('refresh_token', response.refreshToken);
    }
    // If everything goes well, you'll receive a 200 OK response which is very similar to the response when issuing an access token
    // When a refresh token is not returned, continue using the existing token.

    return response;
}

export {checkForAuthCode, redirectToSpotifyAuthorize};