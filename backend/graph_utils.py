from collections import defaultdict, deque
from typing import List, Dict, Any


def is_dag(nodes: List[Dict[str, Any]], edges: List[Dict[str, Any]]) -> bool:
    if not edges:
        return True
    
    node_ids = {node['id'] for node in nodes}
    graph = defaultdict(list)
    in_degree = defaultdict(int)
    
    for node_id in node_ids:
        in_degree[node_id] = 0
    
    for edge in edges:
        source = edge.get('source')
        target = edge.get('target')
        
        if source and target and source in node_ids and target in node_ids:
            graph[source].append(target)
            in_degree[target] += 1
    
    queue = deque([node_id for node_id in node_ids if in_degree[node_id] == 0])
    processed = 0
    
    while queue:
        node = queue.popleft()
        processed += 1
        
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    return processed == len(node_ids)

