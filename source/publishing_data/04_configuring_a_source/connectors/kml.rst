KML connector
=============

The KML File connector is used for KML (.kml) and KMZ (.kmz, compressed KML) files. As defined by `Google <https://developers.google.com/kml/>`_, a KML file is a file used to display geographic data in an Earth browser such as Google Earth.

.. admonition:: Note
   :class: note

   To open a KML file outside the platform, you can use Google Earth.

Creation
~~~~~~~~

See :doc:`how to source a file by uploading a file</publishing_data/01_creating_a_dataset/sourcing_data>`.

Configuration
~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * * Name
     * Description
     * Usage
   * * Extract filename
     * Creates a new column at the end of the dataset with the name of the source file.
     * By default, the box is not checked. Check the box to extract filename in an added column.
