<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'WP_CACHE', true );
define('DB_NAME', "2969090_avweb");

/** MySQL database username */
define('DB_USER', "2969090_avweb");

/** MySQL database password */
define('DB_PASSWORD', "Bilger10_");

/** MySQL hostname */
define('DB_HOST', "pdb51.awardspace.net");

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'sop?uGYuavd`O}#-I#Z]yh*EyrRk^LmXQh-<atV2&EndsqtiJtCTmFgr>07MsP:L');
define('SECURE_AUTH_KEY',  'h7TtordYbP)5!Zch-32?LO}4~O>14hZcr(8KL&gg>#X-_nO<:~ud+VB&5S&we)hX');
define('LOGGED_IN_KEY',    '@1sBU&sV:.;m$K}q  9Z-O%^rF/F_&cpka>Y,G<h8OUN[6oXSqpvfg_7uv6Po5X$');
define('NONCE_KEY',        't4~B2rwc 1%XJ+1eKqsT(5=,ObX7_=(JxnW{$L|Jp#v lvZ@d9Zr0RFjc~Jab~EJ');
define('AUTH_SALT',        '>[OJ~zJ&{>ZEf-r0?JMc6I9#is?*3l%NyTUj^j#f^4pBJWomOpLP;~j!#`+Or{IV');
define('SECURE_AUTH_SALT', 'ZD,7nrNyQ}jQ1uUFv_FQ%cc{R|GLpZA;E1~<F&gvj0<$I$PouF^uyCK0q*@wLt,0');
define('LOGGED_IN_SALT',   'Jm%xZ+)u?)EWL9@gw 8sNf|Hq2(+^yQ{-#a_@DO^AG[uWi!Elsoh6g,_Y]M3C%3l');
define('NONCE_SALT',       '>i:O|0[yt%67c5pK>0q=#&% [<XT1[Z|RZ(<ojN$3$p#/j%CUgQ8BZ6zO(dl&|ay');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

define('ALLOW_UNFILTERED_UPLOADS', true);
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
