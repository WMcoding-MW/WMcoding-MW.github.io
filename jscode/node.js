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
        { data: { id: 'root', name: 'Hello World/Root', href: './blogPostings/entry1.html' } },
        { data: { id: 'e1', name: 'Hashing Algorithms', href: './blogPostings/entry2.html' } },
        { data: { id: 'math', name: 'World Of Math', href: './oops.html'} },
        { data: { id: 'cs', name: 'Computer Science', href: './oops.html'} },
        { data: { id: 'e2', name: 'Basic Discrete Math Terminology', href: './blogPostings/entry3.html'} },
        { data: { id: 'AA', name: 'Abstract Algebra', href: './blogPostings/abstractAlgebra.html'} },
        { data: { id: 'e3', name: 'Binary Operations', href: './blogPostings/entry4.html'} }

        
      ],
      edges: [
        { data: { source: 'root', target: 'math' } },
        { data: { source: 'root', target: 'cs' } },
        { data: { source: 'cs', target: 'e1' } },
        { data: { source: 'math', target: 'e1' } },
        { data: { source: 'math', target: 'e2' } },
        { data: { source: 'math', target: 'AA' } },
        { data: { source: 'AA', target: 'e2' } },
        { data: { source: 'AA', target: 'e3'} }


      ]
    },
  
    layout: {
      name: 'random',
      //padding: 10
    }
  });
  
  cy.on('tap', 'node', function(){
    try { // your browser may block popups
      window.open( this.data('href') );
    } catch(e){ // fall back on url change
      window.location.href = this.data('href');
    }
  });