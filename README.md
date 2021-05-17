<h1 align="center">Select2 Plugin for <a href="https://flextype.org/">Flextype</a></h1>

<p align="center">
<a href="https://github.com/flextype-plugins/select2/releases"><img alt="Version" src="https://img.shields.io/github/release/flextype-plugins/select2.svg?label=version&color=black"></a> <a href="https://github.com/flextype-plugins/select2"><img src="https://img.shields.io/badge/license-MIT-blue.svg?color=black" alt="License"></a> <a href="https://github.com/flextype-plugins/select2"><img src="https://img.shields.io/github/downloads/flextype-plugins/select2/total.svg?color=black" alt="Total downloads"></a> <a href="https://github.com/flextype/flextype"><img src="https://img.shields.io/badge/Flextype-0.9.16-green.svg?color=black" alt="Flextype"></a> <a href=""><img src="https://img.shields.io/discord/423097982498635778.svg?logo=discord&color=black&label=Discord%20Chat" alt="Discord"></a>
</p>

Highly customizable select box plugin for Flextype.

## Dependencies

The following dependencies need to be downloaded and installed for Select2 Plugin.

| Item | Version | Download |
|---|---|---|
| [flextype](https://github.com/flextype/flextype) | 0.9.16 | [download](https://github.com/flextype/flextype/releases) |
| [twig](https://github.com/flextype-plugins/twig) | >=2.0.0 | [download](https://github.com/flextype-plugins/twig/releases) |
| [blueprints](https://github.com/flextype-plugins/blueprints) | >=1.0.0 | [download](https://github.com/flextype-plugins/blueprints/releases) |

## Installation

1. Download & Install all required dependencies.
2. Create new folder `/project/plugins/select2`
3. Download Trumbowyg Plugin and unzip plugin content to the folder `/project/plugins/select2`

## Documentation

### Settings

```yaml
# enabled: true or false to disable the plugin
enabled: true

# Plugin priority
priority: 41

# Place to load
assetsLoadOnAdmin: true
assetsLoadOnSite: false

# Blocks
blocks:
  Select2:
    properties:
      id: select2
      name: select2
      
      # Select2 options
      options:

        # Provides support for ajax data sources.
        # See: https://select2.org/data-sources/ajax
        ajax: null

        # Provides support for clearable selections.
        # See: https://select2.org/selections#clearable-selections
        allowClear: false

        # Controls whether the dropdown is closed after a selection is made.
        # See: https://select2.org/dropdown#forcing-the-dropdown-to-remain-open-after-selection
        closeOnSelect: true

        # Allows rendering dropdown options from an array.
        # See: https://select2.org/data-sources/arrays
        data: null

        # Enable debugging messages in the browser console.
        debug: false

        # Sets the dir attribute on the selection and dropdown containers to indicate the direction of the text.
        # See: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir
        dir: ltr

        # When set to `true`, the select control will be disabled.
        disabled: false

        # Dropdown auto width
        dropdownAutoWidth: false

        # Adds additional CSS classes to the dropdown container. 
        # The helper :all: can be used to add all CSS classes present on the original <select> element.
        dropdownCssClass: ''

        # Maximum number of characters that may be provided for a search term.
        maximumInputLength: 0

        # The maximum number of items that may be selected in a multi-select control. 
        # If the value of this option is less than 1, the number of selected items will not be limited.
        maximumSelectionLength: 0

        # Minimum number of characters required to start a search.
        # See: https://select2.org/searching#minimum-search-term-length
        minimumInputLength: 0

        # The minimum number of results required to display the search box.
        # See: https://select2.org/searching#limiting-display-of-the-search-box-to-large-result-sets
        minimumResultsForSearch: 0

        # This option enables multi-select (pillbox) mode. 
        # Select2 will automatically map the value of the multiple HTML attribute to this option during initialization.
        multiple: false

        # Specifies the placeholder for the control.
        placeholder: null

        # Adds additional CSS classes to the selection container. 
        # The helper :all: can be used to add all CSS classes present on the original <select> element.
        selectionCssClass: ''

        # Implements automatic selection when the dropdown is closed.
        # See: https://select2.org/dropdown#automatic-selection
        selectOnClose: false

        # If true, resolves issue for multiselects using closeOnSelect: false that caused the list of results 
        # to scroll to the first selection after each select/unselect (see https://github.com/select2/select2/pull/5150). 
        # This behaviour was intentional to deal with infinite scroll UI issues (if you need this behavior, set false) 
        # but it created an issue with multiselect dropdown boxes of fixed length. 
        # This pull request adds a configurable option to toggle between these two desirable behaviours.
        scrollAfterSelect: false

    template: plugins/select2/blocks/Select2/block.html
```

## LICENSE
[The MIT License (MIT)](https://github.com/flextype-plugins/select2/blob/master/LICENSE.txt)
Copyright (c) 2021 [Sergey Romanenko](https://github.com/Awilum)
