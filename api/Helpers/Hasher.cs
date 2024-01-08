using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace API.Helpers;

public abstract class Hasher
{
    /**
     * TODO: Make class that load env variables, and load SALT via this class.
     */
    private static byte[] SALT = RandomNumberGenerator.GetBytes(128 / 8);

    public static string hash(string password)
    {
        return Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: SALT,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 100000,
                numBytesRequested: 256 / 8
            )
        );
    }
}