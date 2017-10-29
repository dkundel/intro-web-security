// Make cookies HTTP only
res.cookie('authToken', jwt, { httpOnly: true, signed: true, secure: true });
