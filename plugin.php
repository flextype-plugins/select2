<?php

declare(strict_types=1);

/**
 * @link https://flextype.org
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Flextype\Plugin\Select2;

/**
 * Add Blueprint block `Select2`
 */
flextype('registry')->set('plugins.blueprints.settings.blocks.Select2', 
                            flextype('registry')->get('plugins.select2.settings.blocks.Select2'));                

/**
 * Set Select2 locale
 */                         
if (flextype('registry')->get('flextype.settings.locale') == 'en_US') {
    $locale = 'en';
    flextype('registry')->set('plugins.select2.settings.blocks.Select2.properties.options.lang', $locale);
} else {
    $locale = strings(flextype('registry')->get('flextype.settings.locale'))->lower()->substr(0, 2)->toString();
    flextype('registry')->set('plugins.select2.settings.blocks.Select2.properties.options.lang', $locale);
}

/**
 * Add Select2 assets
 */ 
$select2CSS[] = 'project/plugins/select2/blocks/Select2/dist/css/select2.min.css';
$select2JS[]  = 'project/plugins/select2/blocks/Select2/dist/js/select2.min.js';

if ($locale !== 'en') {
    $select2JS[] = 'project/plugins/select2/blocks/Select2/dist/lang/select2/langs/' . $locale . '.min.js';          
} 

if (flextype('registry')->get('plugins.select2.settings.assetsLoadOnAdmin')) {
    flextype('registry')->set('assets.admin.js.select2', $select2JS);
    flextype('registry')->set('assets.admin.css.select2', $select2CSS);
}

if (flextype('registry')->get('plugins.select2.settings.assetsLoadOnSite')) {
    flextype('registry')->set('assets.site.js.select2', $select2JS);
    flextype('registry')->set('assets.site.css.select2', $select2CSS);
}