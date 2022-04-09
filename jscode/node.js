var cy = cytoscape({
    container: document.getElementById('cy'),
  
    boxSelectionEnabled: false,
    autounselectify: true,
  
    style: cytoscape.stylesheet()
      .selector('node')
        .css({
          'content': 'data(name)',
          'text-valign': 'top',
          'text-halign': 'center',
          'color': 'white',
          'text-outline-width': 1,
          'text-outline-color': '#333',
          'background-color': '#D4AF37' //node colour
        })
      .selector(':selected')
        .css({
          'background-color': 'black',
          'line-color': 'black',
          'target-arrow-color': 'black',
          'source-arrow-color': 'black',
          'text-outline-color': 'black'
        }),
  
    elements: {
      nodes: [
        { data: { id: 'e0', name: 'Journal 1', href: './blogPostings/entry1.html' } },
        { data: { id: 'e1', name: 'Journal 2', href: './blogPostings/entry2.html' } }
      ],
      edges: [
        { data: { source: 'e0', target: 'e1' } }
      ]
    },
  
    layout: {
      name: 'grid',
      padding: 10
    }
  });
  
  cy.on('tap', 'node', function(){
    try { // your browser may block popups
      window.open( this.data('href') );
    } catch(e){ // fall back on url change
      window.location.href = this.data('href');
    }
  });